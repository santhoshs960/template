import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      // "no-unused-vars": "warn", //just uncomment if you don't want the red squiggly line
      // "no-undef": "warn",
    },
  },

  // 🔹 Lint config files as Node code (no more red underlines!)
  {
    files: ["webpack.*.js", "eslint.config.mjs", "*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
]);
