import { fontSans } from "@/src/lib/font";
import { ThemeProvider } from "../components/themeProvider";
import { Toaster } from "../components/ui/toaster";
import { cn } from "../lib/utils";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "The Canvas replacement for the modern student.",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Providers session={session}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          process.env.NEXT_PUBLIC_FONT == "Inter" && fontSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children} <Toaster />
        </ThemeProvider>
      </body>
    </Providers>
  );
}
