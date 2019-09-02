module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: 'airbnb-base',
  plugins: ['my-eslint-rules'],
  rules: {
    'my-eslint-rules/async-func-name': 'error',
    'my-eslint-rules/template-literal': 'error',
  },
};
