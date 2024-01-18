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
  if (process.env.VERCEL_URL) return `https://www.copimo.it/${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function constructMetadata({
  title = "Bienvenue sur Copimo, votre assistant PDF intelligent.",
  description = "Avec Copimo, vous pouvez communiquer avec vos documents de manière intuitive, trouver des informations rapidement et même obtenir des suggestions sur les questions à poser.",
  image = "/copimobanner.png",
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
    // metadataBase: new URL("https://copimo-v2.vercel.app/"),
    metadataBase: new URL("https://www.copimo.it/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
