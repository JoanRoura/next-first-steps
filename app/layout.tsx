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
  title: "Joan Home Page",
  description: "Generated whit love by Vercel",
};

// * El root layout s'executa avanç que la pagines
// * Normalment no necessiterem fer ningun cambi aqui a menys que volem que afecti a totes les pantalles
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
