// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint'
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const sharedRules = {
  indent: ['warn', 4], // enforce 4 space indentation
  'react/jsx-indent': ['warn', 4],
  'react/jsx-indent-props': ['warn', 4],

  'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], // throw error if variable is not used and its name does not start with _ or an uppercase letter

  'tailwindcss/classnames-order': 'warn',
};

export default [
  {
    ignores: ['dist']
  }, 
  
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      ...sharedRules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }, 

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      tailwindcss,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      ...sharedRules,
    },
  },

  ...storybook.configs["flat/recommended"]

];
