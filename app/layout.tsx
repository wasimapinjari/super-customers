import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import ReduxProvider from "../redux/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super-Customers",
  description: "Happy Customers Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="h-screen bg-[#222] text-slate-200">
        <ReduxProvider>
          <main className="grid place-items-center">
            <div className="my-10 flex flex-col items-center">
              <h1 className="mb-8 bg-gradient-to-b from-[white] to-[#fff0] to-[200%] bg-clip-text py-8 text-center text-5xl tracking-tight text-transparent">
                Super-Customers
              </h1>
              {children}
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
