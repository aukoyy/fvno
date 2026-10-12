import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring | Full Vase",
  description: "Personvernerklæring, bruksvilkår og informasjonskapsler for fullvase.no",
};

const sections = [
  {
    title: "Hvilke opplysninger vi samler inn",
    body: "Kontaktinfo (navn, e-post, telefon)",
  },
  {
    title: "Hvorfor vi bruker dem",
    body: "For å levere varer og tjenester, ta bestillinger, gi kundestøtte.",
  },
  {
    title: "Deling",
    body: "Vi deler kun opplysninger med leverandører som hjelper oss å drifte butikken som f.eks fraktpartnere, og aldri utover det som er nødvendig for å levere tjenesten, med mindre loven krever det.",
  },
  {
    title: "Informasjonskapsler",
    body: "Nettstedet bruker per i dag ingen informasjonskapsler.",
  },
  {
    title: "Dine rettigheter",
    body: "Du kan be om innsyn, retting, sletting eller dataportabilitet, og trekke tilbake samtykke når som helst.",
  },
  {
    title: "Lagring og sikkerhet",
    body: "Vi lagrer opplysninger så lenge det er nødvendig for formålet, og bruker rimelige tekniske tiltak for å beskytte dem.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-34 pb-24 flex flex-col items-center">
      <h1 className="font-serif text-4xl md:text-6xl text-center leading-tight max-w-3xl mx-6 mt-16 md:mt-24">
        Personvernerklæring, bruksvilkår og informasjonskapsler
      </h1>

      <div className="max-w-2xl mx-6 mt-16 md:mt-24 space-y-6 leading-relaxed">
        <h2 className="text-xl md:text-2xl font-medium">Sist oppdatert 4. august 2026</h2>
        <p>
          Fullvase («vi», «oss») respekterer ditt personvern. Denne erklæringen forklarer hvordan vi
          behandler personopplysninger når du bruker fullvase.no.
        </p>
        {sections.map((section) => (
          <div key={section.title}>
            <p>{section.title}</p>
            <p>{section.body}</p>
          </div>
        ))}
        <div>
          <p>Kontakt</p>
          <p>
            Spørsmål? Send e-post til{" "}
            <a href="mailto:hei@fullvase.no" className="underline">
              hei@fullvase.no
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
