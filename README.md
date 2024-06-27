# Personal Website

## Overview

Personal website of Alena Tikhomirova, a Frontend developer.

## Features

- **Feature:** description.

## Usage

1. Usage.

## Technologies Used

- React
- Vite
- HTML
- CSS
- JavaScript
- TypeScript
- Tailwind CSS
- Font Awesome CDN

## Contributors

- Alena Tikhomirova

## Contribution

If you have ideas to enhance this project or encounter any issues, feel free to contribute by opening an issue or submitting a pull request. Your input is highly valued!

## Contact

For inquiries or feedback, please contact me at alyonatihomirova9@gmail.com.

## Acknowledgments

Acknowledgments.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
