import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      title: "Memories",
      description: {
        para1:
          "This website serves to facilitate interactions between people who migrated from Italy to Australia. It provides a platform for the sharing of stories of their arrival and settlement in Victoria.",
        para2:
          "This will enable users to gain knowledge about their ‘past’ and create a living history for all generations to gather around and learn from.",
      },
    },
  },
  de: {
    translation: {
      title: "Erinnerungen",
      description: {
        para1:
          "Diese Website dient dazu, die Interaktion zwischen Menschen zu erleichtern, die von Italien nach Australien migriert sind. Es bietet eine Plattform für den Austausch von Geschichten über ihre Ankunft und Ansiedlung in Victoria.",
        para2:
          "Auf diese Weise können Benutzer Kenntnisse über ihre „Vergangenheit“ erlangen und eine lebendige Geschichte für alle Generationen erstellen, um sich zu versammeln und daraus zu lernen.",
      },
    },
  },
  it: {
    translation: {
      title: "Ricordi",
      description: {
        para1:
          "Questo sito web serve a facilitare le interazioni tra le persone che sono emigrate dall'Italia in Australia. Fornisce una piattaforma per la condivisione di storie sul loro arrivo e insediamento nel Victoria.",
        para2:
          "Ciò consentirà agli utenti di acquisire conoscenze sul loro 'passato' e creare una storia vivente per tutte le generazioni in cui raccogliere e imparare.",
      },
    },
  },
  cn: {
    translation: {
      title: "回忆",
      description: {
        para1:
          "该网站旨在促进从意大利移民到澳大利亚的人们之间的互动。 它提供了一个平台，分享他们在维多利亚州到达和定居的故事。",
        para2:
          "这将使用户获得有关其“过去”的知识，并为所有世代创造生活史，供他们聚集和学习。",
      },
    },
  },
  id: {
    translation: {
      title: "Kenangan",
      description: {
        para1:
          "Situs web ini berfungsi untuk memfasilitasi interaksi antara orang yang bermigrasi dari Italia ke Australia. Ini menyediakan platform untuk berbagi cerita tentang kedatangan dan penyelesaian mereka di Victoria.",
        para2:
          "Ini akan memungkinkan pengguna untuk mendapatkan pengetahuan tentang 'masa lalu' mereka dan membuat sejarah hidup untuk semua generasi untuk berkumpul dan belajar dari.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
