import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main id="home" className="space-y-1">
      <h1 className="relative font-medium text-2xl">{t("title")}</h1>
      <p className="text-muted-foreground leading-relaxed sm:max-w-md">
        {t("description")}
      </p>
    </main>
  );
}
