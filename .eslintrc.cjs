/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: { browser: true, es2021: true, node: true },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  ignorePatterns: ['dist', 'node_modules']
}