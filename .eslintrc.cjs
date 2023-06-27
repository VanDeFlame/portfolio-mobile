module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
    'arrow-spacing': ['warn', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', { functions: 'never' }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'dot-location': ['error', 'property'],
    'handle-callback-err': 'off',
    indent: ['error', 'tab'],
    'keyword-spacing': 'error',
    'max-nested-callbacks': ['error', { max: 4 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-floating-decimal': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
    'no-trailing-spaces': ['error'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    yoda: 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};