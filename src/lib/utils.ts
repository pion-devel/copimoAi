import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  //if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  //if (process.env.VERCEL_URL) return `https://copimo-v2.vercel.app/${path}`;
  if (process.env.VERCEL_URL) return `https://www.Kopimo.it/${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function constructMetadata({
  title = "Benvenuti su Copimo, il vostro assistente PDF intelligente.",
  description = "Con Copimo, potete interagire con i vostri documenti in modo intuitivo, trovare informazioni rapidamente e persino ricevere suggerimenti su domande da porre. Iscrivetevi in pochi clic per scoprire l'universo di Copimo. È semplice e veloce. Una volta registrati, potrete godere di incredibili funzionalità per interagire con i vostri documenti PDF.",
  image = "banner.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "Liady fouad",
    },
    icons,
    // metadataBase: new URL("https://-v2.vercel.app/"),
    metadataBase: new URL("https://www.Kopimo.it/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
