module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'ignorePatterns': ['*/node_modules/*', 'client/*', '*/build/*'],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'require-jsdoc': 'off',
  },
};
