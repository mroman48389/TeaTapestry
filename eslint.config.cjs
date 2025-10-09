// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
const storybook = require("eslint-plugin-storybook");

const js = require('@eslint/js');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const tailwindcss = require('eslint-plugin-tailwindcss');
const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');

const sharedRules = {
  'react/jsx-indent': ['warn', 4],
  'react/jsx-indent-props': ['warn', 4],
  "tailwindcss/enforces-shorthand": "warn",
  'tailwindcss/classnames-order': 'warn',
  'tailwindcss/no-custom-classname': 'off',
  semi: ["warn"],
};

module.exports = [
  {
    ignores: [
      'dist', 
      "src/components/ui/**", // ignore all shadcn components
      "src/lib/utils.ts" // from shadcn
    ],
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
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      tailwindcss,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn', // Warns if div/span has click/keypress without role
      'jsx-a11y/interactive-supports-focus': 'warn',     // Ensures interactive elements are focusable
      'jsx-a11y/role-has-required-aria-props': 'warn',    // Ensures ARIA roles have required props
      'jsx-a11y/aria-role': 'warn',                       // Validates ARIA role values
      'jsx-a11y/tabindex-no-positive': 'warn',            // Discourages tabindex > 0 (bad for keyboard flow)
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], // throw error if variable is not used and its name does not start with _ or an uppercase letter
      'react/react-in-jsx-scope': 'off', // Don't flag JSX usage without explicit "import React", since version 17+ doesn't require it.
      ...sharedRules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },

    settings: {
      react: {
        version: '18.0.0',
      },
      tailwindcss: {
        config: require.resolve('./tailwind.config.js'),
        tailwindcssPath: require.resolve('tailwindcss'), 
      },
    },
  }, 

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tseslint,
      tailwindcss,
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/prefer-readonly': 'warn',
      'react/react-in-jsx-scope': 'off', // Don't flag JSX usage without explicit "import React", since version 17+ doesn't require it.
      ...sharedRules,
    },
    
    settings: {
      react: {
        version: '18.0.0',
      },
      tailwindcss: {
        config: require.resolve('./tailwind.config.js'),
        tailwindcssPath: require.resolve('tailwindcss'), 
      }
    },
  },

  {
    files: ['**/*'],
    ignores: ['dist', '*.md', '*.json'],
  },

  ...storybook.configs["flat/recommended"]

];
