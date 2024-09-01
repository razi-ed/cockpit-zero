import { Inter as FontSans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@components/templates/theme-provider";
import { AppLayout } from "@components/templates/app-layout";

import { cn } from "@shared/lib/utils";

import type { Metadata } from "next";

import "@shared/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cockpit0",
  description: "Awesome Observability Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /**
       * adding `suppressHydrationWarningas`  since it was suggeted by the next-themes pkg
       * https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
       * */
      suppressHydrationWarning
    >
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout>{children}</AppLayout>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
