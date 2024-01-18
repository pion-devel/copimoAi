import { trpc } from "@/app/_trpc/client";
import { INFINITE_QUERY_LIMIT } from "@/config/infinite-query";
import { Loader2, MessageSquare } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import Message from "./Message";
import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "./ChatContext";
import { useIntersection } from "@mantine/hooks";

interface MessagesProps {
  fileId: string;
}

const Messages = ({ fileId }: MessagesProps) => {
  const { isLoading: isAiThinking } = useContext(ChatContext);

  const { data, isLoading, fetchNextPage } =
    trpc.getFileMessages.useInfiniteQuery(
      {
        fileId,
        limit: INFINITE_QUERY_LIMIT,
      },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        keepPreviousData: true,
      }
    );

  const messages = data?.pages.flatMap((page) => page.messages);

  const loadingMessage = {
    createdAt: new Date().toISOString(),
    id: "loading-message",
    isUserMessage: false,
    text: (
      <span className="flex h-full items-center justify-center">
        <Loader2 className="h-4 w-4 animate-spin" />
      </span>
    ),
  };

  const combinedMessages = [
    ...(isAiThinking ? [loadingMessage] : []),
    ...(messages ?? []),
  ];

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const { ref, entry } = useIntersection({
    root: lastMessageRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {combinedMessages && combinedMessages.length > 0 ? (
        combinedMessages.map((message, i) => {
          const isNextMessageSamePerson =
            combinedMessages[i - 1]?.isUserMessage ===
            combinedMessages[i]?.isUserMessage;

          if (i === combinedMessages.length - 1) {
            return (
              <Message
                ref={ref}
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
          } else
            return (
              <Message
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
        })
      ) : isLoading ? (
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="h-8 w-8 text-blue-500" />
          <h3 className="font-semibold text-xl">Ci siamo 🥸</h3>
          <p className="text-zinc-500 text-sm">
            Puoi iniziare a chattare col tuo PDF
          </p>
          <div className="block max-w-sm p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Ciao e benvenuto su Copimo 🚀
              </h5>
              <p className="text-zinc-500 text-sm">
                🚀 Pronto per un'avventura folle tra i tuoi documenti? Mettiamo
                su uno spettacolo di intelligenza artificiale! ✨ Facci domande
                e faremo ridere persino i libri di testo! 😄
              </p>
              <p className="text-zinc-500 text-sm mt-2">
                <span className="font-bold tracking-tight text-gray-900 dark:text-white">
                  ✏️ Fai domande dirette:
                </span>{" "}
                Puoi porre domande specifiche sul tuo documento usando la chat.
                Copimo utilizzerà l'IA per fornirti risposte utili.
              </p>
              <p className="text-zinc-500 text-sm mt-2">
                <span className="font-bold tracking-tight text-gray-900 dark:text-white">
                  ✏️ Chiedi suggerimenti per le domande:
                </span>{" "}
                Se hai difficoltà a trovare domande pertinenti, chiedi
                semplicemente a Copimo di suggerirti domande interessanti che
                potresti fare sul tuo documento.
              </p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
