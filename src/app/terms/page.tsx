import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 ">
        <div>
          <div className="font-black text-xl mb-4">Termini di servizio</div>
          <div className="font-bold text-base mb-4">
            {" "}
            Ultimo aggiornamento : 2 novembre 2023
          </div>
          <h3 className="font-bold text-base mb-4">1. Introduzione</h3>
          <p>
            Copimo è un servizio servizio che permette di chattare con qualsiasi
            documento attraverso l&apos;intelligenza artificiale. Copimo è
            disponibile in Italia ed è pensato principalmente per gli studenti.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">
            2. Registrazione e accesso
          </h3>
          <p>
            Per utilizzare Copimo è necessario registrarsi e creare un account.
            La registrazione è gratuita e può essere effettuata da qualsiasi
            persona di età superiore ai 18 anni.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">3. Utilizzo del servizio</h3>
          <p>
            Per utilizzare Copimo è necessario caricare un documento sul
            servizio. Copimo riconoscerà il testo del documento e creerà
            un'interfaccia di chat. L&apos;utente può quindi interagire con il
            documento attraverso la chat.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">4. Contenuti e privacy</h3>
          <p>
            L&apos;utente è responsabile dei contenuti che carica su Copimo.
            Copimo non è responsabile della veridicità o dell&apos;accuratezza
            dei contenuti.
          </p>
          <p>
            Copimo raccoglie i dati personali degli utenti per fornire il
            servizio. I dati personali degli utenti sono trattati in conformità
            con la normativa vigente in materia di protezione dei dati
            personali.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">5. Termini di pagamento</h3>
          <p>
            Copimo è gratuito per gli utenti che utilizzano il servizio per un
            massimo di 5 pagine per PDF. Per utilizzare il servizio per più di 5
            Pagine per PDF è necessario sottoscrivere un abbonamento.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">
            6. Termini di interruzione
          </h3>
          <p>
            L&apos;utente può interrompere l&apos;utilizzo di Copimo in
            qualsiasi momento. Per interrompere l&apos;utilizzo di Copimo è
            necessario cancellare l'account.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">
            7. Clausola di esclusione della responsabilità
          </h3>
          <p>
            Copimo non è responsabile per eventuali danni causati
            dall&apos;utilizzo del servizio.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">8. Legge applicabile</h3>
          <p>
            I presenti termini d&apos;uso sono regolati dalla legge italiana.
          </p>
          <br></br>
          <h3 className="font-bold text-base mb-4">9. Contatti</h3>
          <p>
            Per qualsiasi richiesta o informazione è possibile contattare Copimo
            all&apos;indirizzo e-mail: info@copimo.it
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
