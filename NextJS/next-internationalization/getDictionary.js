const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  hi: () => import("./dictionaries/hi.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = (locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
