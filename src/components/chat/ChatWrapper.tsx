"use client";

import { trpc } from "@/app/_trpc/client";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { ChevronLeft, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ChatContextProvider } from "./ChatContext";
import { PLANS } from "@/config/stripe";

interface ChatWrapperProps {
  fileId: string;
  isSubscribed: boolean;
}

const ChatWrapper = ({ fileId, isSubscribed }: ChatWrapperProps) => {
  const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
    {
      fileId,
    },
    {
      refetchInterval: (data) =>
        data?.status === "SUCCESS" || data?.status === "FAILED" ? false : 500,
    }
  );

  if (isLoading)
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
            <h3 className="font-semibold text-xl">Caricamento...</h3>
            <p className="text-zinc-500 text-sm">
              Elaborazione del PDF in corso...
            </p>
          </div>
        </div>

        <ChatInput isDisabled />
      </div>
    );

  if (data?.status === "PROCESSING")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
            <h3 className="font-semibold text-xl">
              {" "}
              Elaborazione del PDF in corso...
            </h3>
            <p className="text-zinc-500 text-sm">
              Questa operazione non richiederà molto tempo.
            </p>
          </div>
        </div>

        <ChatInput isDisabled />
      </div>
    );

  if (data?.status === "FAILED")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-8 w-8 text-red-500" />
            <h3 className="font-semibold text-xl">Troppe pagine nel PDF</h3>
            <p className="text-zinc-500 text-sm">
              Il tuo piano supporta fino a
              {/*<span className="font-medium">
                {isSubscribed ? "Pro" : "Free"}
    </span>*/}{" "}
              {isSubscribed
                ? PLANS.find((p) => p.name === "Pro")?.pagesPerPdf
                : PLANS.find((p) => p.name === "Free")?.pagesPerPdf}{" "}
              pagine per PDF.
            </p>
            {isSubscribed ? (
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "secondary",
                  className: "mt-4",
                })}
              >
                <ChevronLeft className="h-3 w-3 mr-1.5" />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "secondary",
                  className: "mt-4",
                })}
              >
                <ChevronLeft className="h-3 w-3 mr-1.5" />
                Passare al piano Pro - per studenti
              </Link>
            )}
          </div>
        </div>

        <ChatInput isDisabled />
      </div>
    );
  if (data?.status === "SUCCESS") {
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-8 w-8 text-red-500" />
            <h3 className="font-semibold text-xl">hey</h3>
            <p className="text-zinc-500 text-sm">
              Il tuo piano supporta fino a
              {/*<span className="font-medium">
                {isSubscribed ? "Pro" : "Free"}
    </span>*/}{" "}
              {isSubscribed
                ? PLANS.find((p) => p.name === "Pro")?.pagesPerPdf
                : PLANS.find((p) => p.name === "Free")?.pagesPerPdf}{" "}
              pagine per PDF.
            </p>
            {isSubscribed ? (
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "secondary",
                  className: "mt-4",
                })}
              >
                <ChevronLeft className="h-3 w-3 mr-1.5" />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "secondary",
                  className: "mt-4",
                })}
              >
                <ChevronLeft className="h-3 w-3 mr-1.5" />
                Passare al piano Pro - per studenti
              </Link>
            )}
          </div>
        </div>

        <ChatInput />
      </div>
    );
  }
  return (
    <ChatContextProvider fileId={fileId}>
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 justify-between flex flex-col mb-28">
          <Messages fileId={fileId} />
        </div>

        <ChatInput />
      </div>
    </ChatContextProvider>
  );
};

export default ChatWrapper;
