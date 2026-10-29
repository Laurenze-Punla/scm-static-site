import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  // ── Browser scripts (main.js) ────────────────────────────────────────────
  {
    files: ["js/main.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        // Allow CommonJS exports used by the Jest export shim
        module: "readonly",
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      curly: "error",
    },
  },
  // ── Jest test files ──────────────────────────────────────────────────────
  {
    files: ["js/**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      eqeqeq: "error",
      curly: "error",
    },
  },
];
