import { Footer } from "@/components/footer";
import { FooterCTA } from "@/components/footer-cta";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { LogSnagProvider } from "../events/client";
import "../ui/globals.css";
import { cn } from "../ui/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Provider } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://fluxozen.com"),
  title: "FluxoZen | Seu negócio de maneira mais inteligente",
  description:
    "O FluxoZen fornece uma visão melhor do seu negócio e automatiza as tarefas chatas, permitindo que você se concentre no que você gosta de fazer.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LogSnagProvider
          token={process.env.NEXT_PUBLIC_LOGSNAG_TOKEN!}
          project={process.env.NEXT_PUBLIC_LOGSNAG_PROJECT!}
          disableTracking={Boolean(process.env.NEXT_PUBLIC_LOGSNAG_DISABLED!)}
        />
      </head>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#F6F6F3] dark:bg-[#0C0C0C] overflow-x-hidden"
        )}
      >
        <Provider>
          <Header />
          <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
            {children}
          </main>
          <FooterCTA />
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}