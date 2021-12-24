module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  "no-underscore-dangle":"off",
  "default-param-last":"off",
  "no-console": "off",
  "no-alert": "off",
  "arrow-body-style":"off",
  // suppress errors for missing 'import React' in files
  'react/react-in-jsx-scope': 'off',
  // allow jsx syntax in js files (for next.js project)
  'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // should add ".ts" if typescript project
  "react/function-component-definition": [
    1,
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }]  },
};
