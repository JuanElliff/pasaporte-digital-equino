module.exports = {
  root: true,
  env: { es6: true, node: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: true, // hace que eslint-plugin-import lea ts/paths
    },
  },
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-unresolved': 'off', // apagamos el falso positivo
  },
  ignorePatterns: ['/lib/**', '/generated/**'],
};
