module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:nuxt/recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "never"],
      quotes: ["error", "single"],
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "vue/attribute-hyphenation": ["error", "always"]
    }
  }
  