module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
};
