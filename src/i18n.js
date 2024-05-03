import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./assets/france.png";
import en from "./assets/united-kingdom.png";
const resources = {
  en: {
    translation: {
      lang_btn: en,
      lang: "EN",
      home: "Home",
      service: "Services",
      consulting: "consulting",
      web_dev: "web development",
      mob_dev: "mobile development",
      devops: "DevOps engineering",
      gra_design: "graphic design",
      uix_design: "UI/UX design",
      tutoring: "programming tutoring",
      finance: "finance",
      bank: "banking",
      agro: "agronomy",
      hum_res: "human resources",
      law_firm: "law firm",
      real_estate: "real estate",
      donation: "donation",
      lending: "lending",
      project: "project",
      industry: "Industries",
      blog: "Blog",
      aboutUs: "why us",
      faqs: "FAQs",
      bannerText: "We help organisation build",
      secured: "secure",
      outstanding: "outstanding",
      scalable: "scalable",
      beautiful: "beautiful",
      agile: "agile",
      digital_platform: "digital platform",
      wen_u_av: "When you have the right foundation, your business will grow",
      we_comb_web:
        "We combine website design and branding with the right online tools to accelerate your business success",
      brand: "brand",
      brand_subtitle: "Define your message and captivate your audience.",
      build: "build",
      build_subtitle:
        "Own a world-class website, connected to the best digital tools.",
      grow: "grow",
      grow_subtitle:
        "Enjoy on-going digital support and strategy with our team of experts.",
      see_how_we: "See how we can help you reach your goals",
      answer_quiz_typo:
        "Answer two questions to help us match our expertise and software solutions to your sector.",
      wat_industry: "What is your industry?",
      wat_ur_need: "What is your actual need?",
      our_project: "Our projects",
      our_project_subtitle: "Explore Our Diverse Portfolio: From Code to Creativity, We've Got Projects Covered!",
    },
  },
  fr: {
    translation: {
      lang_btn: fr,
      lang: "FR",
      home: "Accueil",
      service: "Services",
      consulting: "consultant",
      web_dev: "développement web",
      mob_dev: "développement mobile",
      devops: "ingénierie DevOps",
      gra_design: "conception graphique",
      uix_design: "conception graphique UI/UX",
      tutoring: "tutorat en programmation",
      finance: "finance",
      bank: "banking",
      agro: "agronomie",
      hum_res: "ressources humaines",
      law_firm: "droit",
      real_estate: "immobilier",
      lending: "prêt",
      donation: "donation",
      project: "projet",
      industry: "Industries",
      blog: "Blog",
      aboutUs: "A propos",
      faqs: "FAQs",
      bannerText: "nous aidons les organisations à construire",
      secured: "sécurisées",
      agile: "agiles",
      outstanding: "remarquables",
      scalable: "évolutives",
      beautiful: "belles",
      digital_platform: "des platformes numériques",
      wen_u_av:
        "Lorsque vous avez les bonnes bases, votre entreprise se développera",
      we_comb_web:
        "Nous combinons la conception de sites Web et la conception d'images de marque avec les bons outils en ligne pour accélérer le succès de votre entreprise",
      brand: "marque",
      brand_subtitle: "Définissez votre message et captivez votre audience.",
      build: "construire",
      build_subtitle:
        "Posséder un site Web de classe mondiale, connecté aux meilleurs outils numériques.",
      grow: "devenir",
      grow_subtitle:
        "Profitez d'un soutien et d'une stratégie numériques continus avec notre équipe d'experts.",
      see_how_we:
        "Découvrez comment nous pouvons vous aider à atteindre vos objectifs",
      answer_quiz_typo:
        "Répondez à deux questions pour nous aider à adapter notre expertise et nos solutions logicielles à votre domaine.",
      wat_industry: "Quelle est votre industrie?",
      wat_ur_need: "Quel est votre besoin réel ?",
      our_project: "Nos Réalisation",
      our_project_subtitle: "Découvrez Notre Portfolio Varié : Du Code à la Créativité, Tous Nos Projets Sont à l'Honneur !",

    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
