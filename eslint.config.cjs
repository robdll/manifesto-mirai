/**
 * ESLint 9 usa "flat config" por padrão.
 * Aqui usamos o FlatCompat para reaproveitar os presets do `eslint-config-next`.
 */

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname
});

module.exports = [
  // Regras recomendadas do Next para apps com App Router.
  ...compat.extends("next/core-web-vitals", "next/typescript")
];


