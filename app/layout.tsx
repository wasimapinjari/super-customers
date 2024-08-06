import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import GrainyTexture from "./_components/GrainyTexture";

export const metadata: Metadata = {
  title: "Super-Customers",
  description: "Happy Customers Hub",
};

const ReduxProvider = dynamic(() => import("../redux/Provider"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-[#222] text-slate-200">
        <GrainyTexture />
        <ReduxProvider>
          <main className="scrollbar grid h-screen place-items-center overflow-y-scroll">
            <div className="my-10 flex flex-col items-center">
              <h1 className="mb-8 bg-gradient-to-b from-[white] to-[#fff0] to-[200%] bg-clip-text px-4 py-8 text-center text-5xl tracking-tight text-transparent">
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
