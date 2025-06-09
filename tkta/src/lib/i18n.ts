import en from "../locales/en/common.json";
import az from "../locales/az/common.json";

const translations = {
  en,
  az,
};

export function getTranslation(locale: string) {
  return translations[locale as keyof typeof translations] || translations.az;
}
