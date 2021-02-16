module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: [
    'react',
    'react-hooks',
    "prettier"
  ],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
