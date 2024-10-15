import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["build/**", "coverage/**"],
  },
  eslint.configs.recommended,
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
    rules: {
      ...tseslint.configs["recommended-type-checked"].rules,
      ...tseslint.configs["stylistic-type-checked"].rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginImport.configs.typescript.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },
  {
    files: ["lib/**"],
    rules: {
      "import/no-default-export": "error",
    },
  },
];
