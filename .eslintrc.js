module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  ignorePatterns: ["!*rc.js"],
  parserOptions: {
    ecmaVersion: 2018
  }
};
