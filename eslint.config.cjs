/**
 * ESLint 9 usa "flat config" por padrão.
 *
 * No Next.js 16+, o `eslint-config-next` já exporta configurações em formato
 * flat config (arrays). Então não precisamos de compat layer.
 */

module.exports = [
  ...require("eslint-config-next/core-web-vitals"),
  ...require("eslint-config-next/typescript"),

  // O CTA sincroniza um estado booleano com `localStorage` (somente no dispositivo),
  // o que é um caso legítimo de efeito "one-shot" em componente client.
  {
    files: ["components/SupportCTA.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off"
    }
  },

  // Este arquivo é configuração (Node/CJS). Evita falsos positivos aqui.
  {
    files: ["eslint.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];


