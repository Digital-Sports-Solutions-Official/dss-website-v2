// src/lib/docs/mdx.ts
//
// Compiles the Docusaurus-flavored markdown into React elements.
//
// The source files were written for Docusaurus, so they use a handful of things
// plain MDX does not understand. Rather than rewrite ~30 content files, this
// module translates them at compile time:
//
//   - `import X from '@theme/...'` / `'@site/...'` lines are dropped; the same
//     component names are supplied through the MDX components map instead.
//   - `useBaseUrl('...')` is unwrapped. Every call in the content passes an
//     absolute URL, so the helper was already a no-op.
//   - `:::tip Title` admonitions become <Admonition type="tip" title="Title">.
//   - `onMouseOver={…}` handlers are dropped, since server components cannot
//     serialize functions.

import type { ComponentType } from 'react';
import type { MDXComponents } from 'mdx/types';
import type { Root as MdastRoot } from 'mdast';
import type { Element, Root as HastRoot } from 'hast';
import type { PluggableList } from 'unified';
import { compile, run } from '@mdx-js/mdx';
import matter from 'gray-matter';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
// Pinning the production JSX runtime keeps `next dev` and `next build` on the
// same React element factory. Letting it swap to jsx-dev-runtime produces
// elements the RSC renderer rejects as "created with a production version of
// React but rendered in development".
import * as jsxRuntime from 'react/jsx-runtime';

export interface TocEntry {
  depth: number;
  id: string;
  text: string;
}

const ADMONITION_TYPES = new Set([
  'note',
  'tip',
  'info',
  'caution',
  'warning',
  'danger',
]);

/** Index of the `}` closing the `{` at `start`, ignoring braces inside strings. */
function findClosingBrace(source: string, start: number): number {
  let depth = 0;
  let quote: string | null = null;

  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (char === '\\') i += 1;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"' || char === '`') quote = char;
    else if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

/**
 * Drops `onMouseOver={…}`-style props. The docs render as server components, so
 * React cannot serialize a function across the boundary. Every handler in the
 * content is a hover colour tweak on a download button, which `docs.css`
 * reproduces with a `:hover` rule.
 */
function stripJsxEventHandlers(source: string): string {
  const handler = /\son[A-Z][A-Za-z]*\s*=\s*\{/g;
  let result = '';
  let copiedTo = 0;
  let match: RegExpExecArray | null;

  while ((match = handler.exec(source)) !== null) {
    const closing = findClosingBrace(source, match.index + match[0].length - 1);
    if (closing === -1) continue;
    result += source.slice(copiedTo, match.index);
    copiedTo = closing + 1;
    handler.lastIndex = copiedTo;
  }

  return result + source.slice(copiedTo);
}

/**
 * Rewrites Docusaurus-only syntax that the MDX compiler would either choke on
 * or silently render wrong.
 */
function preprocessDocusaurusMdx(source: string): string {
  return stripJsxEventHandlers(
    source
      // MDX has no HTML comments — `<!-- … -->` is a parse error.
      .replace(/<!--[\s\S]*?-->/g, '')
      // Docusaurus resolves these aliases through webpack; we provide the same
      // component names via the components map.
      .replace(/^import\s+.*?from\s+['"](?:@theme|@site|@docusaurus)\/.*?['"];?\s*$/gm, '')
      // useBaseUrl('https://…') -> 'https://…'
      .replace(/useBaseUrl\(\s*(['"])(.*?)\1\s*\)/g, '$1$2$1')
      // `:::tip Use Case` -> `:::tip[Use Case]`, the label form remark-directive
      // understands. Bare `:::tip` and the closing `:::` are left alone.
      .replace(/^(:{3,})([a-zA-Z][\w-]*)[ \t]+([^\[\n][^\n]*)$/gm, '$1$2[$3]')
  );
}

/** Turns remark-directive container nodes into <Admonition> JSX elements. */
function remarkAdmonitions() {
  return (tree: MdastRoot) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;

      const directive = node as unknown as {
        type: string;
        name: string;
        children: unknown[];
        attributes?: Record<string, string>;
        data?: Record<string, unknown>;
      };

      if (!ADMONITION_TYPES.has(directive.name)) return;

      // remark-directive puts the `[Label]` text in a paragraph tagged as the
      // directive label; pull it out and use it as the admonition title.
      let title: string | undefined;
      const children = directive.children.filter((child) => {
        const candidate = child as {
          type?: string;
          data?: { directiveLabel?: boolean };
          children?: { value?: string }[];
        };
        if (candidate.data?.directiveLabel && candidate.type === 'paragraph') {
          title = candidate.children?.map((c) => c.value ?? '').join('') ?? '';
          return false;
        }
        return true;
      });

      const attributes = [
        {
          type: 'mdxJsxAttribute',
          name: 'type',
          value: directive.name,
        },
      ];
      if (title) {
        attributes.push({ type: 'mdxJsxAttribute', name: 'title', value: title });
      }

      Object.assign(node, {
        type: 'mdxJsxFlowElement',
        name: 'Admonition',
        attributes,
        children,
        data: undefined,
      });
    });
  };
}

const BLOCK_LEVEL_TAGS = new Set([
  'address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl',
  'fieldset', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul',
]);

/** Tag name of a hast element or an MDX JSX element, whichever this node is. */
function tagNameOf(node: { type: string; tagName?: string; name?: string | null }) {
  if (node.type === 'element') return node.tagName;
  if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
    return node.name ?? undefined;
  }
  return undefined;
}

/**
 * Rewrites `<p>` wrappers that ended up containing block-level children as
 * `<div>`. The content hand-writes things like `<p style={{…}}>` around a
 * markdown paragraph; MDX then nests a generated `<p>` inside it, and a browser
 * silently un-nests that during parsing, which breaks React hydration. The
 * replacement keeps paragraph spacing through a class.
 */
function rehypeFixParagraphNesting() {
  return (tree: HastRoot) => {
    visit(tree, (node) => {
      const raw = node as {
        type: string;
        tagName?: string;
        name?: string | null;
        children?: { type: string; tagName?: string; name?: string | null }[];
        properties?: Record<string, unknown>;
        attributes?: { type: string; name?: string; value?: unknown }[];
      };

      if (tagNameOf(raw) !== 'p') return;
      const hasBlockChild = raw.children?.some((child) => {
        const tag = tagNameOf(child);
        return tag !== undefined && BLOCK_LEVEL_TAGS.has(tag);
      });
      if (!hasBlockChild) return;

      if (raw.type === 'element') {
        raw.tagName = 'div';
        const existing = raw.properties?.className;
        raw.properties = {
          ...raw.properties,
          className: [
            ...(Array.isArray(existing) ? existing : existing ? [existing] : []),
            'docs-block-p',
          ],
        };
        return;
      }

      raw.name = 'div';
      raw.attributes = raw.attributes ?? [];
      const className = raw.attributes.find(
        (attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'className'
      );
      if (className && typeof className.value === 'string') {
        className.value = `${className.value} docs-block-p`;
      } else if (!className) {
        raw.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'className',
          value: 'docs-block-p',
        });
      }
    });
  };
}

function textContent(node: Element): string {
  let out = '';
  visit(node, 'text', (child: { value: string }) => {
    out += child.value;
  });
  return out.trim();
}

/** Collects h2/h3 headings (after rehype-slug has assigned ids) for the page TOC. */
function rehypeCollectHeadings(collector: TocEntry[]) {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element) => {
      const match = /^h([23])$/.exec(node.tagName);
      if (!match) return;
      const id = node.properties?.id;
      if (typeof id !== 'string') return;
      const text = textContent(node);
      if (!text) return;
      collector.push({ depth: Number(match[1]), id, text });
    });
  };
}

type MdxContent = ComponentType<{ components?: MDXComponents }>;

/**
 * Compiles one markdown file into a renderable component plus its heading
 * outline. Runs at build time for every page under /docs.
 */
export async function renderDoc(
  source: string
): Promise<{ Content: MdxContent; toc: TocEntry[] }> {
  const toc: TocEntry[] = [];

  const remarkPlugins: PluggableList = [
    remarkGfm,
    remarkDirective,
    remarkAdmonitions,
  ];
  const rehypePlugins: PluggableList = [
    rehypeFixParagraphNesting,
    rehypeSlug,
    [rehypeCollectHeadings, toc],
  ];

  const compiled = await compile(
    preprocessDocusaurusMdx(matter(source).content),
    {
      format: 'mdx',
      outputFormat: 'function-body',
      development: false,
      remarkPlugins,
      rehypePlugins,
    }
  );

  const { default: Content } = (await run(compiled, {
    ...jsxRuntime,
    baseUrl: import.meta.url,
  })) as { default: MdxContent };

  return { Content, toc };
}
