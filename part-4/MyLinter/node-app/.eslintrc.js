module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  plugins: ['my-eslint-rules'],
  rules: {
    'my-eslint-rules/async-func-name': 'error',
  },
};
