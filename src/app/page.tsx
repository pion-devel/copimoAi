"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-12 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Provalo ora! È gratuito.
          </p>
        </div>
        <h1 className="max-w-4xl mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
          Benvenuti su Copimo,
          <span className="text-blue-600">il tuo assistente PDF </span>{" "}
          intelligente.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Ora puoi esplorare i PDF in modo più facile. L&apos;IA qui può tirare
          fuori il succo da documenti lunghi, spiegarti cose complesse, trovare
          info importanti in un attimo e addirittura darti suggerimenti su
          domande da fare. Cool, eh?
        </p>
        {/**
 * 
 *  <RegisterLink
          className={buttonVariants({
            size: "sm",
          })}
        >
          Inizia ora
          <ArrowRight className="ml-1.5 h-5 w-5" />
        </RegisterLink>
 * 
 */}
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {/* <Image
                    src="/dashboard-preview.png"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
            */}
                  <CldVideoPlayer width="1620" height="920" src="copimo-demo" />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Ecco come funziona
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kopimo utilizza l&apos;intelligenza artificiale per analizzare il
              tuo PDF e rispondere a qualsiasi domanda tu possa avere. Hai
              bisogno di chiarimenti su un concetto? Hai dubbi su un passaggio
              specifico? Kopimo è lì per te, pronto a rispondere.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">Creare un account</span>
              <span className="mt-2 text-zinc-700">
                Clicca sul pulsante :Prova gratuitamente.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Carica il tuo file PDF
              </span>
              <span className="mt-2 text-zinc-700">
                Il tuo file verrà elaborato e sarà pronto per una conversazione.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Inizia a fare domande.
              </span>
              <span className="mt-2 text-zinc-700">
                È proprio così facile. Prova Copimo oggi stesso, impiegherai
                meno di un minuto.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/copimoDashboard2.png"
                alt="uploading preview"
                width={1620}
                height={920}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>

        {/* Title features */}
        <div className="mb-12 mt-28 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Kopimo in poche parole
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Preparati per gli esami, ottieni aiuto con i compiti (e rispondi
              anche alle domande a scelta multipla).
            </p>
          </div>
        </div>

        {/* features */}
        {/*
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
         
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">Pour les étudiants</span>
              <span className="mt-2 text-zinc-700">
                Préparez-vous aux examens, obtenez de l&apos;aide pour les
                devoirs (et répondez également aux questions à choix multiples).
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">Pour les chercheurs</span>
              <span className="mt-2 text-zinc-700">
                Publications scientifiques, articles universitaires et livres.
                Obtenez les informations dont vous avez besoin pour votre
                recherche.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Pour les professionnels
              </span>
              <span className="mt-2 text-zinc-700">
                Contrats juridiques, rapports financiers, manuels et matériel
                pédagogique. Posez n&apos;importe quelle question à
                n&apos;importe quel PDF et obtenez rapidement des informations
                détaillées.
              </span>
            </div>
          </li>
        </ol>
              */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">In qualsiasi lingua</span>
              <span className="mt-2 text-zinc-700">
                Kopimo accetta PDF in qualsiasi lingua e può conversare in
                qualsiasi lingua.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">Fonti nei PDF</span>
              <span className="mt-2 text-zinc-700">
                Non avrai più bisogno di navigare freneticamente tra le pagine
                per trovare ciò che cerchi.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">Semplice e Sicuro</span>
              <span className="mt-2 text-zinc-700">
                Veloce, facile, gratuito e sicuro! I file sono memorizzati in un
                cloud storage sicuro e non saranno mai condivisi.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
