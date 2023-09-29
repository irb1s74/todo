module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-functions-async': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'n/handle-callback-err': 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/promise-function-async': 'off',
  },
}
