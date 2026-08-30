import fs from 'node:fs';
import path from 'node:path';
import type { NextConfig } from "next";

// The newest entry in docs/versions.json is served at /docs (no version prefix),
// matching how the Docusaurus site behaved. Anyone landing on the prefixed URL
// for that version gets sent to the canonical one.
const latestDocsVersion = (
  JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'docs', 'versions.json'), 'utf8')
  ) as string[]
)[0];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: `/docs/${latestDocsVersion}`,
        destination: '/docs',
        permanent: true,
      },
      {
        source: `/docs/${latestDocsVersion}/:path*`,
        destination: '/docs/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
