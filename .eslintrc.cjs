module.exports = {
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },    
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
