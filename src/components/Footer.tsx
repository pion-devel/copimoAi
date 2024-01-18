import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Footer = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <>
      {!user && (
        <footer className="sticky h-14 inset-x-0 bottom-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
          <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
              <Link href="/" className="flex z-40 font-semibold">
                <Image src="/logo2.png" alt="Logo" width={150} height={50} />
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Prezzo
                </Link>

                <Link
                  href="/terms"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Termini d&apos;uso
                </Link>

                <Link
                  href="/privacy"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Privacy
                </Link>

                <p>
                  Contattaci: <b>info@copimo.it</b>{" "}
                </p>
              </ul>
            </div>

            <span className="block text-sm text-gray-500 mt-6 pb-8 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://www.copimo.it/" className="hover:underline">
                Copimo™
              </a>
            </span>
          </MaxWidthWrapper>
        </footer>
      )}
    </>
  );
};

export default Footer;
