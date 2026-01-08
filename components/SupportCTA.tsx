"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * CTA sem caráter eleitoral:
 * - Não coleta dados pessoais.
 * - Opcionalmente registra um "apoio à visão" apenas neste dispositivo (localStorage).
 */
const STORAGE_KEY = "condominio-dona-mirai.manifesto.visao-apoia";

export default function SupportCTA() {
  const [supported, setSupported] = useState(false);
  const [justClicked, setJustClicked] = useState(false);

  // Evita acessar localStorage durante SSR.
  useEffect(() => {
    try {
      setSupported(window.localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // Se o navegador bloquear storage, o CTA continua funcionando (só não persiste).
      setSupported(false);
    }
  }, []);

  const buttonLabel = useMemo(() => {
    if (supported) return "Obrigado — visão registrada";
    return "Essa visão faz sentido para mim";
  }, [supported]);

  function handleClick() {
    setJustClicked(true);
    setSupported(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Sem persistência, sem problema.
    }
  }

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold">
            Essa visão de gestão faz sentido para você?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Se fizer, você pode registrar um “apoio à visão” — sem cadastro e sem
            dados obrigatórios.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={supported}
          className={[
            "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold",
            "transition shadow-sm",
            supported
              ? "bg-slate-200 text-slate-700 cursor-default"
              : "bg-leaf text-white hover:bg-leaf/90 active:bg-leaf/95"
          ].join(" ")}
          aria-disabled={supported}
        >
          {buttonLabel}
        </button>
      </div>

      {(justClicked || supported) && (
        <p className="mt-4 text-sm text-slate-700">
          Obrigado por dedicar um tempo para refletir sobre o futuro do nosso
          condomínio.
        </p>
      )}
    </div>
  );
}


