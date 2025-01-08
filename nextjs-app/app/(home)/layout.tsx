import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { LiveErrorBoundary } from "@/app/components/LiveErrorBoundary";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { GET_NAV_LINKS, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import localFont from "next/font/local";
import ObserverProvider from "../components/ObserverProvider";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const graphik = localFont({
  src: [
    { path: "../fonts/graphik-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/graphik-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/graphik-super.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-graphik",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  const navLinks = sanityFetch({ query: GET_NAV_LINKS });

  return (
    <html lang="en" className={`${graphik.variable} bg-white text-black`}>
      <body>
        <section className="">
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <LiveErrorBoundary>
            <SanityLive />
          </LiveErrorBoundary>
          {/* <Header /> */}
          <ObserverProvider>{children}</ObserverProvider>
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
