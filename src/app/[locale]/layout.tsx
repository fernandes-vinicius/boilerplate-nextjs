import "../globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { fontMono, fontSans } from "@/config/fonts";
import { SEO } from "@/config/seo";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `$%s | ${SEO.title}`,
  },
  description: SEO.description,
  // ... more SEO meta tags
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props;
  const locale = (await params).locale;

  // Ensure that the incoming `locale` is valid
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
