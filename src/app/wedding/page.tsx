import { Button } from "antd";
import Image from "next/image";

export default function WeddingPage() {
  return (
    <main className="font-serif">
      <div className="relative w-screen h-screen flex items-center justify-center bg-black/30">
        <Image
          src="/wedding/bridal-girl-flowers.jpg"
          alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
          width={3000}
          height={3000}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="text-white text-center flex flex-col items-center mb-24 z-10">
          <p className="text-lg lg:text-3xl mt-12 font-sans">DITT DRØMME-</p>
          <h1 className="text-6xl lg:text-9xl mt-4">Bryllup</h1>
        </div>
      </div>

      <div className="px-6 py-12 lg:py-32 max-w-7xl mx-auto text-center">
        <h2 className="max-w-5xl mx-auto text-2xl lg:text-5xl leading-snug font-light font-serif">
          Fra intime middager til store feiringer - vi skaper blomsterdekor som gir arrangementet et
          gjennomført og minneverdig preg.
        </h2>
      </div>

      <div className="bg-fv-250 py-32 flex flex-col items-center gap-8 ">
        <div className="max-w-3xl mx-auto text-center px-6 space-y-6 ">
          <h2 className="text-4xl lg:text-6xl leading-tight">La oss snakke drømmebryllup!</h2>
          <p className="max-w-sm font-sans mx-auto mt-12">
            Vi vil gjerne høre om dine ønsker til bryllupet. Liker du pastellfarger, moderne
            monokrom, eller ser du for deg en eventyrlig engelsk hage? La oss starte planleggingen
            sammen.
          </p>
          <Button type="link" size="large" href="/contact" className="underline! p-0!">
            Kontakt oss
          </Button>
        </div>
      </div>

      <div className="mt-24 md:mt-32 mx-12 flex flex-col items-center">
          <div className="lg:flex justify-between items-center space-x-24">
            <Image
              src="/wedding/logo-gold.png"
              alt=""
              width={1000}
              height={1000}
              className="object-cover md:h-120 -mt-24"
            />
            <Image
              src="/wedding/bryllup-detaljer.jpg"
              alt=""
              width={1000}
              height={1000}
              className="object-cover md:w-100 mx-auto"
            />
        </div>
        <div className="">
          <Image
            src="/wedding/gl-bryllup2.jpg"
            alt=""
            width={1000}
            height={1000}
            className="mt-12 lg:-mt-12 md:w-130 object-cover"
          />
        </div>
      </div>

      <div className="mt-56"></div>
    </main>
  );
}
