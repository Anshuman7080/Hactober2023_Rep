module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': 'off', // Disable max length rule
    'no-param-reassign': 'off', // Allow parameter reassignments
    'react/react-in-jsx-scope': 'off', // No need for React in scope with React 17+
    'react/prop-types': 'off', // Disable prop-types for TypeScript
    'import/extensions': 'off', // Disable import extension rules
    'linebreak-style': 'off', // Disable linebreak style enforcement
    'object-curly-newline': 'off', // Disable new line enforcement for objects
    'react/function-component-definition': 'off', // Allow any function component definition style
    'react/jsx-filename-extension': 'off', // No restriction on file extensions
    'react/jsx-one-expression-per-line': 'off', // Allow multiple expressions in one line
    'jsx-a11y/click-events-have-key-events': 'off', // Disable click events have key events rule
    'jsx-a11y/alt-text': 'off', // Disable alt text enforcement
    'jsx-a11y/no-autofocus': 'off', // Allow autofocus on elements
    'jsx-a11y/no-static-element-interactions': 'off', // Allow static elements to have interactions
    'react/no-array-index-key': 'off', // Allow usage of array index as key
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
