import type { Metadata } from "next";
import { T, GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("Atelier Home Furniture | General Translation");
  const description = gt("A modern furniture e-commerce demo showcasing internationalization with General Translation. Browse sofas, tables, beds, and more.");
  return {
    title,
    description,
    openGraph: { title, description, locale, type: "website", siteName: "General Translation" },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://furniture-shop.generaltranslation.dev",
      languages: { en: "/en", es: "/es", fr: "/fr", ja: "/ja", zh: "/zh" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="antialiased bg-[#F5F0EB] min-h-screen flex flex-col text-[#2C2C2C]">
        <GTProvider>
          <CartProvider>
            <div className="bg-[#2C2C2C] text-white text-center text-xs py-2 px-4">
              <T>
                This is a demo application built with{" "}
                <a href="https://generaltranslation.com" className="underline text-[#C9A96E]">General Translation</a>
                {" "}to showcase internationalization. It is not a real store.
              </T>
            </div>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </GTProvider>
      </body>
    </html>
  );
}
