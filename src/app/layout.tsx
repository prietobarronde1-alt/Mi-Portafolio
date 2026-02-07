
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Prieto | Senior Full-Stack Engineer & Digital Transformation",
  description: "Portafolio de David Prieto. Desarrollador Full-Stack y Experto en Transformación Digital en Tijuana. Especialista en React, Python, SQL Server y Modernización de Sistemas.",
  openGraph: {
    title: "David Prieto | Senior Full-Stack Engineer",
    description: "Transformando datos en soluciones reales. Portafolio profesional.",
    url: "https://mi-portafolio.vercel.app",
    siteName: "David Prieto Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import Background from "@/components/Background";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
