module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: 'airbnb-base',
  plugins: ['my-eslint-rules'],
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    'my-eslint-rules/async-func-name': 'error',
    'my-eslint-rules/template-literal': 'error',
    'no-console': 'off',
    'prefer-template': 'off',
  },
};
