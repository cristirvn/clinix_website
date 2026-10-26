/**
 * Interface strings (navigation, buttons, form labels, errors) — Romanian.
 * `en.ts` must have exactly the same shape (enforced by the `Dictionary` type).
 * Page copy lives in `content/pages/<locale>/…`, quizzes and LPs in their own folders.
 */
export const ro = {
  langName: "Română",
  switchTo: "English",
  switchToShort: "EN",
  skipToContent: "Sari la conținut",
  nav: {
    howItWorks: "Cum funcționează",
    about: "Despre noi",
    pricing: "Tarife",
    team: "Echipă",
    tests: "Teste gratuite",
    cta: "Vreau BrainMap",
    menu: "Meniu",
    close: "Închide",
  },
  footer: {
    tagline: "Longevity. Wellness. Neuro.",
    description: "Clinică de neuroștiință aplicată din București. Măsurăm înainte să recomandăm.",
    clinic: "Clinica",
    freeTests: "Teste gratuite",
    contact: "Contact",
    allTests: "Toate testele →",
    privacy: "Politica de confidențialitate",
    terms: "Termeni și condiții",
    rights: "Toate drepturile rezervate.",
    disclaimer:
      "Informațiile de pe acest site au caracter informativ și nu înlocuiesc consultul medical. Testele online sunt instrumente de auto-evaluare, nu diagnostice.",
  },
  common: {
    callUs: "Sună-ne",
    whatsapp: "Scrie-ne pe WhatsApp",
    readMore: "Află mai multe",
    back: "← Înapoi",
    next: "Continuă →",
    minutes: "minute",
    questions: "întrebări",
    takeTest: "Fă testul →",
    playVideo: "Pornește video",
    videoSoon: "Video în curând",
  },
  form: {
    name: "Nume complet",
    firstName: "Prenume",
    phone: "Telefon mobil",
    email: "Email",
    message: "Mesaj (opțional)",
    namePlaceholder: "ex. Maria Popescu",
    phonePlaceholder: "07xx xxx xxx",
    emailPlaceholder: "nume@gmail.com",
    consent: "Sunt de acord cu prelucrarea datelor mele personale, inclusiv a răspunsurilor legate de sănătate, conform",
    consentLink: "Politicii de confidențialitate",
    required: "Câmp obligatoriu",
    invalidName: "Scrie numele complet.",
    invalidPhone: "Introdu un număr de mobil românesc real: 10 cifre, care începe cu 07.",
    invalidEmail: "Introdu o adresă personală Gmail sau Yahoo validă (nu una de test).",
    invalidEmailGeneric: "Introdu o adresă de email validă.",
    consentRequired: "Bifează acordul ca să putem continua.",
    sending: "Se trimite…",
    error: "Nu am putut trimite formularul. Încearcă din nou sau sună-ne la",
    privacyNote: "Datele tale sunt confidențiale. Nu trimitem spam.",
  },
  loader: {
    left: "Neuroștiință aplicată",
    right: "București · România",
  },
  cookies: {
    title: "Folosim cookie-uri",
    text: "Cookie-urile necesare țin site-ul în funcțiune. Cu acordul tău, folosim și cookie-uri de statistică, ca să înțelegem ce pagini sunt utile și să îmbunătățim site-ul.",
    accept: "Accept toate",
    essential: "Doar cele necesare",
    policy: "Politica de confidențialitate",
    settings: "Setări cookie",
    label: "Acord pentru cookie-uri",
  },
  design: {
    title: "Alege designul",
    hint: "Previzualizare pentru proprietar — dispare la lansare.",
  },
};

export type Dictionary = typeof ro;
