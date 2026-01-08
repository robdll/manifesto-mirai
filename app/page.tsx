import SupportCTA from "@/components/SupportCTA";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero fade-in">
        <div className="container">
          <h1>Um convite para pensarmos juntos o futuro do nosso condomínio</h1>
          <p className="subtitle">
            Este não é um lançamento de candidatura.
            <br />
            É uma proposta de reflexão sobre o tipo de gestão que pode nos ajudar a
            viver melhor aqui.
          </p>
        </div>
      </div>

      {/* Seção 1: O momento do condomínio */}
      <section>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">O momento do condomínio</h2>
          <div className="content-block">
            <p>O Condomínio Dona Miraí é novo.</p>
            <p>Estamos em fase de implantação, aprendizado e construção coletiva.</p>
            <p>
              Nos últimos meses, muito foi feito para que o condomínio começasse a
              funcionar. Agora, entramos em uma nova etapa — uma etapa que exige
              mais organização, acompanhamento contínuo e clareza nos processos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2: O desafio real */}
      <section>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">O desafio real</h2>
          <div className="content-block">
            <p>
              Em condomínios grandes, com muitas demandas acontecendo ao mesmo
              tempo, os problemas raramente surgem por má vontade.
            </p>
            <p>Na maioria das vezes, eles surgem por falta de:</p>
            <div className="prose-list">
              ✦ registro claro das demandas;
              <br />
              ✦ acompanhamento visível dos processos;
              <br />
              ✦ memória coletiva do que foi decidido;
              <br />
              ✦ ferramentas simples que ajudem a não perder informações no caminho.
            </div>
            <p>
              Quando tudo depende apenas da lembrança individual, coisas
              importantes acabam se perdendo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Nossa visão de gestão */}
      <section>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Nossa visão de gestão</h2>
          <div className="content-block">
            <p>Acreditamos que um condomínio pode funcionar melhor quando a gestão é:</p>

            <div className="values-list">
              <div className="value-item">
                <h3>Transparente</h3>
                <p>
                  Todos sabem o que está acontecendo, por que está acontecendo e em
                  que etapa cada demanda se encontra.
                </p>
              </div>

              <div className="value-item">
                <h3>Organizada</h3>
                <p>Demandas registradas, acompanhadas e concluídas com clareza.</p>
              </div>

              <div className="value-item">
                <h3>Participativa</h3>
                <p>Moradores não apenas informados, mas parte do processo.</p>
              </div>

              <div className="value-item">
                <h3>Acompanhada por ferramentas simples</h3>
                <p>
                  Tecnologia a serviço das pessoas — não para complicar, mas para
                  facilitar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Tecnologia como apoio */}
      <section>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Tecnologia como apoio, não como fim</h2>
          <div className="content-block">
            <p>Ferramentas digitais não substituem pessoas, diálogo ou cuidado.</p>
            <p>Elas apenas ajudam a:</p>
            <div className="prose-list">
              ✦ não esquecer demandas;
              <br />
              ✦ acompanhar prazos;
              <br />
              ✦ registrar decisões;
              <br />
              ✦ dar mais agilidade às soluções.
            </div>
            <p>
              Em um condomínio do tamanho do Dona Miraí, isso deixa de ser um luxo e
              passa a ser uma necessidade.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SupportCTA />

      {/* Footer */}
      <footer>
        <div className="container">
          <p>Um manifesto para o futuro do Condomínio Dona Miraí</p>
          <p className="italic">
            Apresentado com respeito, diálogo e compromisso com a vida coletiva
          </p>
        </div>
      </footer>
    </main>
  );
}


