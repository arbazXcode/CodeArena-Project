import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "CodeArena",
    template: "%s | CodeArena",
  },
  description:
    "CodeArena is a modern platform to master Data Structures and Algorithms with real-time execution, detailed analytics, and competitive leaderboards.",
  keywords: [
    "CodeArena",
    "Data Structures",
    "Algorithms",
    "Coding Practice",
    "Competitive Programming",
    "DSA",
  ],
  authors: [{ name: "Arbaz Alam" }],
  creator: "Arbaz Alam",
  metadataBase: new URL("https://codearena.dev"), // change later if needed
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="top-right" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}