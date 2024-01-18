import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 ">
        <div>
          <div className="font-black text-xl mb-4">Informazioni generali</div>
          <div className="font-bold text-base mb-4">
            {" "}
            Ultimo aggiornamento : 2 novembre 2023
          </div>
          <div className=" text-base mb-4">
            {" "}
            Kopimo è un servizio servizio che permette di chattare con qualsiasi
            documento attraverso l&apos;intelligenza artificiale. Kopimo è
            disponibile in Italia ed è pensato principalmente per gli studenti.
            Kopimo raccoglie i dati personali degli utenti per fornire il
            servizio. I dati personali degli utenti sono trattati in conformità
            con la normativa vigente in materia di protezione dei dati
            personali.
          </div>
          <p>
            <br></br>
          </p>
          <h3 className="font-bold text-base mb-4 mt-4">1. Dati Raccolti:</h3>
          <p>Kopimo raccoglie i seguenti dati personali degli utenti:</p>
          <br></br>
          <ul>
            <li>
              ▪️ Dati di contatto: nome, cognome, indirizzo e-mail, numero di
              telefono.
            </li>
            <li>▪️ Dati di registrazione: username e password.</li>
            <li>
              ▪️ Dati di utilizzo del servizio:documenti caricati, interazioni
              con il servizio, dati di navigazione.
            </li>
          </ul>
          <br></br>
          <h3 className="font-bold text-base mb-4 mt-4">
            2. Finalità del trattamento dei dati
          </h3>
          <p>
            {" "}
            I dati personali degli utenti sono raccolti e trattati per le
            seguenti finalità:
          </p>
          <br></br>
          <ul>
            <li>▪️ Fornire il servizio di Kopimo.</li>
            <li>
              ▪️ Personalizzare il servizio in base alle esigenze degli utenti.
            </li>
            <li>▪️ Contattare gli utenti per finalità di marketing.</li>
            <li>▪️ Migliorare il servizio di Kopimo.</li>
          </ul>
          <h3 className="font-bold text-base mb-4 mt-4">
            3. Condivisione dei dati
          </h3>
          <p>
            I dati personali degli utenti possono essere condivisi con i
            seguenti soggetti:
          </p>
          <br></br>
          <ul>
            <li>
              ▪️ Fornitori di servizi tecnici: i fornitori di servizi tecnici
              sono responsabili della manutenzione e dell&apos;aggiornamento del
              software e dell&apos;hardware utilizzati per fornire il servizio
              di Kopimo.
            </li>
            <li>
              ▪️ Fornitori di servizi di marketing: i fornitori di servizi di
              marketing sono responsabili della gestione delle attività di
              marketing di Kopimo.
            </li>
          </ul>
          <h3 className="font-bold text-base mb-4 mt-4">
            4. Diritti degli utenti
          </h3>
          <p>
            {" "}
            Gli utenti hanno i seguenti diritti in relazione ai propri dati
            personali:
          </p>
          <br></br>

          <ul>
            <li>
              {" "}
              ▪️ Diritto di accesso: gli utenti hanno il diritto di richiedere a
              Kopimo l&apos;accesso ai propri dati personali.
            </li>
            <li>
              ▪️ Diritto di rettifica: gli utenti hanno il diritto di richiedere
              a Kopimo la rettifica dei propri dati personali in caso di
              inesattezza o incompletezza.
            </li>
            <li>
              ▪️ Diritto alla cancellazione: gli utenti hanno il diritto di
              richiedere a Kopimo la cancellazione dei propri dati personali.
            </li>
            <li>
              ▪️ Diritto alla limitazione del trattamento: gli utenti hanno il
              diritto di richiedere a Kopimo di limitare il trattamento dei
              propri dati personali.
            </li>
            <li>
              ▪️ Diritto alla portabilità dei dati: gli utenti hanno il diritto
              di richiedere a Kopimo di ricevere i propri dati personali in un
              formato strutturato, di uso comune e leggibile da dispositivo
              automatico.
            </li>
            <li>
              ▪️ Diritto di opposizione: gli utenti hanno il diritto di opporsi
              al trattamento dei propri dati personali da parte di Kopimo.
            </li>
          </ul>
          <h3 className="font-bold text-base mb-4 mt-4">
            5. Modalità di esercizio dei diritti
          </h3>
          <p>
            Gli utenti possono esercitare i propri diritti in relazione ai
            propri dati personali contattando Kopimo all&apos;indirizzo e-mail :
            info@kopimo.it
          </p>
          <h3 className="font-bold text-base mb-4 mt-4">
            6. Sicurezza dei dati
          </h3>
          <p>
            Kopimo adotta misure di sicurezza tecniche e organizzative per
            proteggere i dati personali degli utenti da accessi non autorizzati,
            divulgazione, modifica o distruzione.
          </p>
          <h3 className="font-bold text-base mb-4 mt-4">
            7. Modifiche alla Privacy Policy
          </h3>
          <p>
            Kopimo può modificare la presente Privacy Policy in qualsiasi
            momento. Le modifiche saranno pubblicate sul sito web di Kopimo e
            saranno in vigore dalla data di pubblicazione.
          </p>
          <h3 className="font-bold text-base mb-4 mt-4">8. Contatti</h3>
          <p>
            Per qualsiasi richiesta o informazione è possibile contattare Kopimo
            all&apos;indirizzo e-mail : info@Kopimo.it
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
