"use client";

import { useEffect, useState } from "react";

export default function SupportCTA() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!showThankYou) return;
    const id = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
    return () => window.clearTimeout(id);
  }, [showThankYou]);

  return (
    <section className="cta-section">
      <div className="container">
        <div className="divider" />

        {!showThankYou ? (
          <div id="cta-content">
            <h2 className="section-title">Antes de qualquer eleição</h2>

            <p className="cta-intro">
              Antes de qualquer candidatura, a pergunta mais importante é:
            </p>

            <p className="cta-question">Essa visão de gestão faz sentido para você?</p>

            <p className="cta-context">
              Acreditamos que a escolha de um síndico deve vir depois de um
              alinhamento sobre como queremos gerir o condomínio — e não o contrário.
            </p>

            <button
              type="button"
              className="cta-button"
              onClick={() => setShowThankYou(true)}
            >
              <span>Essa visão faz sentido para mim</span>
            </button>
          </div>
        ) : (
          <div id="thank-you" className="thank-you show" aria-live="polite">
            <h2>Obrigado</h2>
            <p className="thank-you-text">
              Obrigado por dedicar um tempo para refletir sobre o futuro do nosso
              condomínio.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


