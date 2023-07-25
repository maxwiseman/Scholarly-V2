import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import { Toaster } from "../components/ui/toaster";
import { ThemeProvider } from "../components/themeProvider";
import { fontSans } from "@/src/lib/font";
import { cn } from "../lib/utils";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "The Canvas replacement for the modern student.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
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
    </ClerkProvider>
  );
}
