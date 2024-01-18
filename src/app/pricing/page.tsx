import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UpgradeButton from "@/components/UpgradeButton";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  const pricingItems = [
    {
      plan: "Hobby",
      tagline:
        "Ideale per gli utenti occasionali che necessitano di una navigazione di base dei documenti e di risposte alle domande.",
      quota: 5,
      features: [
        {
          text: "Fino a 5 pagine per PDF.",
          footnote: "Limite di caricamento file",
        },
        {
          text: "2 MB per PDF.",
          footnote: "Limite di dimensione file",
        },
        {
          text: "Interfaccia Mobile-friendly.",
          footnote: "Accedi a Kopimo sul tuo dispositivo mobile",
        },
        {
          text: "Conversazioni illimitate.",
          // negative: true,
        },
        {
          text: "Ricevi risposte informative e pertinenti.",
          footnote:
            "Ottimizzazione delle risposte algoritmiche per migliorare la qualità del contenuto.",
          negative: true,
        },
        {
          text: "Assistenza prioritaria.",
          negative: true,
        },
      ],
    },

    {
      plan: "Pro",
      tagline:
        "Adatto agli studenti che cercano risposte di alta qualità e assistenza prioritaria per un'esperienza ottimale.",
      quota: PLANS.find((p) => p.slug === "pro")!.quota,
      features: [
        {
          text: "Fino a 500 pagine per PDF.",
          footnote: "Limite di caricamento file",
        },
        {
          text: "1000 MB per PDF.",
          footnote: "Limite di dimensione file",
        },
        {
          text: "Interfaccia Mobile-friendly.",
          footnote: "Accedi a Kopimo sul tuo dispositivo mobile ",
        },
        {
          text: "Conversazioni illimitate.",
        },
        {
          text: "Ricevi risposte informative e pertinenti.",
          footnote:
            "Ottimizzazione delle risposte algoritmiche per migliorare la qualità del contenuto.",
        },
        {
          text: "Assistenza prioritaria.",
        },
      ],
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 max-w-5xl">
          <h1 className="text-6xl font-bold sm:text-5xl">
            Come scegliere il piano giusto ?
          </h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Se stai solo testando Kopimo o se hai bisogno di un numero limitato
            di funzionalità, il piano gratuito è un&apos;ottima opzione. Se
            invece hai bisogno di un numero illimitato di funzionalità o di
            risposte più accurate e complete, il piano a pagamento è la
            soluzione migliore.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price =
                PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                  .amount || 0;

              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl bg-white shadow-lg", {
                    "border-2 border-blue-600 shadow-blue-200": plan === "Pro",
                    "border border-gray-200": plan !== "Pro",
                  })}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-36 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      Più popolare
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan === "Pro" ? "Per i studenti" : "Hobby"}
                    </h3>
                    <p className="text-gray-500">{tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      €{price}
                    </p>
                    <p className="text-gray-500">al mese</p>
                  </div>

                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()} PDFs/mese incluso</p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          Numero di PDF scaricabili al mese
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-600", {
                                "text-gray-400": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    {plan === "Hobby" ? (
                      <Link
                        href={user ? "/dashboard" : "/sign-in"}
                        className={buttonVariants({
                          className: "w-full",
                          variant: "secondary",
                        })}
                      >
                        {user && "Dashboard"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    ) : user ? (
                      <UpgradeButton />
                    ) : (
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {user ? "Passare al piano Pro" : "Passare al piano Pro"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
