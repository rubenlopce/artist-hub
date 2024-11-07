import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'airbnb',
      'airbnb-typescript',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:jest/recommended',
      'plugin:typescript-sort-keys/recommended',
      'plugin:cypress/recommended',
      'plugin:unicorn/recommended',
      'prettier'
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
//    plugins: {
//      'react-hooks': reactHooks,
//      'react-refresh': reactRefresh,
//    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
