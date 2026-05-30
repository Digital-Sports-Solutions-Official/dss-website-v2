import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Load the core Next.js linting configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // 2. Enable Prettier recommended rules (must be last)
  eslintPluginPrettierRecommended,
];

export default eslintConfig;