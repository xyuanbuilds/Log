module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};
