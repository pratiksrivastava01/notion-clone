import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { ConvexClientProvider } from "@/components/provider/convex-provider";
import { ModalProvider } from "@/components/provider/modal-provider";
import { EdgeStoreProvider } from "../lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspaces where faster work happens",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.svg",
      href: "/logo.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
