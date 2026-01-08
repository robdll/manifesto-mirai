import SupportCTA from "@/components/SupportCTA";

function Section({
  id,
  title,
  children
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm"
    >
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      {/* HERO */}
      <header className="rounded-3xl bg-gradient-to-b from-white to-sand border border-slate-200 p-6 sm:p-10 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-slate-600">
          Condomínio Dona Miraí
        </p>
        <h1 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
          Um convite para pensarmos juntos o futuro do nosso condomínio
        </h1>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 max-w-prose">
          Este não é um lançamento de candidatura.
          <br />
          É uma proposta de reflexão sobre o tipo de gestão que pode nos ajudar a
          viver melhor aqui.
        </p>
      </header>

      {/* CONTEÚDO */}
      <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6">
        <Section id="momento" title="O momento do condomínio">
          <p>
            O Condomínio Dona Miraí é novo.
            <br />
            Estamos em fase de implantação, aprendizado e construção coletiva.
          </p>
          <p className="mt-3">
            Nos últimos meses, muito foi feito para que o condomínio começasse a
            funcionar. Agora, entramos em uma nova etapa — uma etapa que exige
            mais organização, acompanhamento contínuo e clareza nos processos.
          </p>
        </Section>

        <Section id="desafio" title="O desafio real">
          <p>
            Em condomínios grandes, com muitas demandas acontecendo ao mesmo
            tempo, os problemas raramente surgem por má vontade.
          </p>
          <p className="mt-3">Na maioria das vezes, eles surgem por falta de:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>registro claro das demandas</li>
            <li>acompanhamento visível dos processos</li>
            <li>memória coletiva do que foi decidido</li>
            <li>
              ferramentas simples que ajudem a não perder informações no caminho
            </li>
          </ul>
          <p className="mt-3">
            Quando tudo depende apenas da lembrança individual, coisas
            importantes acabam se perdendo.
          </p>
        </Section>

        <Section id="visao" title="Nossa visão de gestão">
          <p>Acreditamos que um condomínio pode funcionar melhor quando a gestão é:</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <h3 className="font-semibold text-ink">Transparente</h3>
              <p className="mt-1">
                Todos sabem o que está acontecendo, por que está acontecendo e em
                que etapa cada demanda se encontra.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <h3 className="font-semibold text-ink">Organizada</h3>
              <p className="mt-1">
                Demandas registradas, acompanhadas e concluídas com clareza.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <h3 className="font-semibold text-ink">Participativa</h3>
              <p className="mt-1">
                Moradores não apenas informados, mas parte do processo.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <h3 className="font-semibold text-ink">
                Acompanhada por ferramentas simples
              </h3>
              <p className="mt-1">
                Tecnologia a serviço das pessoas — não para complicar, mas para
                facilitar.
              </p>
            </div>
          </div>
        </Section>

        <Section id="tecnologia" title="Tecnologia como apoio, não como fim">
          <p>Ferramentas digitais não substituem pessoas, diálogo ou cuidado.</p>
          <p className="mt-3">Elas apenas ajudam a:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>não esquecer demandas</li>
            <li>acompanhar prazos</li>
            <li>registrar decisões</li>
            <li>dar mais agilidade às soluções</li>
          </ul>
          <p className="mt-3">
            Em um condomínio do tamanho do Dona Miraí, isso deixa de ser um luxo e
            passa a ser uma necessidade.
          </p>
        </Section>

        <Section id="antes" title="Antes de qualquer eleição">
          <p>Antes de qualquer candidatura, a pergunta mais importante é:</p>
          <p className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-4 font-semibold text-ink">
            Essa visão de gestão faz sentido para você?
          </p>
          <p className="mt-3">
            Acreditamos que a escolha de um síndico deve vir depois de um
            alinhamento sobre como queremos gerir o condomínio — e não o contrário.
          </p>
        </Section>

        {/* CTA */}
        <div id="apoio" className="scroll-mt-24">
          <SupportCTA />
        </div>
      </div>

      {/* RODAPÉ */}
      <footer className="mt-10 sm:mt-12 border-t border-slate-200 pt-6 text-center">
        <p className="text-sm text-slate-700">
          Manifesto elaborado por moradores do Condomínio Dona Miraí
          <br />
          Com respeito, diálogo e compromisso com a vida coletiva
        </p>
      </footer>
    </main>
  );
}


