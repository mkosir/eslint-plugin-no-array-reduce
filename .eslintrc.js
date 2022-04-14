/** @type {import('@types/eslint').Linter.BaseConfig} */
const eslintConfig = {
  parser: '@typescript-eslint/parser',

  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],

  plugins: ['@typescript-eslint', 'import'],

  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],

    // Import
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  // ESlint default behaviour ignoring file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  // Lint files and folders starting with "." (.storybook, .commitlintrc.ts, etc.)
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
};

module.exports = eslintConfig;
