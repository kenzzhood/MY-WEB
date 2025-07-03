import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goutham Srinath - AI/ML & AR/VR Developer",
  description: "Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI. Building innovative solutions that push technological boundaries.",
  keywords: ["AI", "ML", "AR", "VR", "GenAI", "Developer", "Computer Science", "Unity", "Python", "React"],
  authors: [{ name: "Goutham Srinath" }],
  creator: "Goutham Srinath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goutham-portfolio.vercel.app",
    title: "Goutham Srinath - AI/ML & AR/VR Developer",
    description: "Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI. Building innovative solutions that push technological boundaries.",
    siteName: "Goutham Srinath Portfolio",
    images: [
      {
        url: "/ggas.png",
        width: 1200,
        height: 630,
        alt: "Goutham Srinath - AI/ML & AR/VR Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goutham Srinath - AI/ML & AR/VR Developer",
    description: "Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI.",
    images: ["/ggas.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}