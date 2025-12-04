import { Button } from "antd";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-34 md:text-lg font-serif">
      <div className="flex items-center justify-center py-16 md:py-24">
        <div className="relative max-w-4xl w-full mx-4 md:mx-8">
          <Image
            src="/about/arranging-roses.jpg"
            alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6">Bak blomstene</h1>
              <p className="text-base md:text-lg lg:text-3xl font-sans italic">Møt Full Vase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row mt-24 w-full">
        <div className="lg:w-1/3">
          <Image
            src="/about/sara-about-1.jpg"
            alt="Sara from Full Vase arranging flowers"
            width={800}
            height={600}
            className=""
          />
        </div>
        <div className="lg:w-1/3 text-center px-12 space-y-12 py-12 lg:py-0 flex flex-col justify-center">
          <p className="font-sans">HEI, SARA HER</p>
          <p className="leading-loose">
            Jeg elsker blomster... så klart! Derfor startet jeg i 2024 blomsterstudioet Full Vase.
          </p>
          <p className="leading-loose">
            Med tidligere erfaring fra prosjektledelse, bærekraft og design kombinerer jeg struktur
            og kreativitet for å levere vakre blomster til livets store øyeblikk.
          </p>
          <p className="leading-loose">
            Du finner Full Vase på Instagram, TIK TOK, Facebook og LinkedIn (TIPS: mest aktiv på
            Instagram)! Følg oss gjerne der for oppdateringer, behind-the-scene, samt bilder og
            videoer fra nylige blomsterleveringer &lt;3
          </p>
          <Button
            target="_blank"
            type="link"
            href="https://www.instagram.com/fullvase.no/"
            size="large"
            className="underline! font-bold! mt-6"
          >
            Ta meg til instagram
          </Button>
        </div>
        <div className="lg:w-1/3">
          <Image
            src="/about/sara-about-2.jpg"
            alt="Sara from Full Vase arranging flowers"
            width={800}
            height={600}
            className=""
          />
        </div>
      </div>

      <div className="flex justify-center py-24">
        <div className="bg-fv-200  border-6 border-fv-250 text-center py-16 px-6 md:px-24 mx-4">
          <h2 className="text-4xl font-sans font-semibold italic">Det ligger i navnet</h2>
          <div className="space-y-8 my-12 max-w-xl">
            <p>
              Full Vase skaper blomsterdekorasjoner til bryllup, events og selskaper - fra frodige
              installasjoner til delikate bordoppsatser.
            </p>
            <p>
              Vi tilpasser uttrykket etter sesong, lokale og visjon, og sørger for at blomstrene
              blir en naturlig del av helhetsopplevelsen.
            </p>
            <p>
              Enten du planlegger et storslått arrangement eller en intim feiring, hjelper vi deg å
              skape stemning med blomster.
            </p>
            <p>Vi fyller vasen og atmosfæren med blomster &lt;3</p>
          </div>
        </div>
      </div>
    </main>
  );
}
