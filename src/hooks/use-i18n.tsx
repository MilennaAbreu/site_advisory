import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Language = "en" | "pt";

type I18nContextType = {
  lang: Language;
  toggle: () => void;
  setLang: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("pt");

  const value = useMemo<I18nContextType>(() => ({
    lang,
    toggle: () => setLang((prev) => (prev === "en" ? "pt" : "en")),
    setLang,
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};


