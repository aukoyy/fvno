import Image from "next/image";
import { Button } from "antd";
import ImageTextLink from "./components/image-text-link";

export default function Home() {
  return (
    <div className="">
      <main className="font-serif">
        <div className="absolute bottom-24 md:bottom-48 md:ml-8 text-white p-6 rounded-lg space-y-4 md:space-y-8">
          <h1 className="text-md md:text-2xl font-sans font-semibold">VELKOMMEN TIL FULL VASE</h1>     
          <p className="text-4xl md:text-7xl">Frodig blosterdesign til ditt event</p>   
          <p className="max-w-md md:text-lg font-sans">Vi tror på blomster som forteller historier, om kjærlighet, glede og alt det vakre som gjør en dag uforglemmelig. Fyll vasen med minner og blomster.</p>
          <p className="text-lg md:text-xl font-sans"><span className="pr-2">— </span>Utforsk våre tjenester</p>
        </div>
        <Image
          src="/landing/fv-hero-2-min.jpg"
          alt="Full Vase Hero"
          width={1920}
          height={1080}
          className="w-screen h-screen object-cover"
          style={{ objectPosition: '67% center' }}
        />

        <div className="py-4 bg-fv-400 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            {Array.from({ length: 100 }, (_, i) => (
              <span key={i} className="text-white text-lg md:text-2xl font-medium tracking-wider mx-4">
                KLAR FOR EN FRODIG FULL VASE?
              </span>
            ))}
          </div>
        </div>
        
        <div className="py-16 md:py-24 bg-fv-250 flex flex-col items-center">
          <p className="text-2xl md:text-6xl font-light text-center mx-18 max-w-4xl leading-relaxed md:leading-snug">Blomster du <i>faktisk</i> synes er skikkelig vakre. Vi designer din visjon til ditt event eller bryllup.</p>
          <Button type="link" href="/portfolio" size="middle" className="mt-8 text-black! hover:text-fv-700! underline hidden!">
            Se tidligere arbeid
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="py-40 text-center max-w-2xl">
            <p className="font-sans">SLIK FUNGERER DET</p>
            <p className="text-xl md:text-3xl mx-2 mt-12 max-w-xl leading-relaxed">Du deler visjonen, vi skaper magien med blomster, håndverk og Full Vase eleganse.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 mb-40">
          <ImageTextLink 
            title="Komplett event pakke"
            description="Fra scenedekor til bordoppsett og stemningslys.Vi planlegger, setter på plass og rydder opp etterpå, slik at alt er tatt hånd om."
            imageSrc="/landing/cheers-glasses.jpg"
          />
          <ImageTextLink 
            title="Ditt drømmebryllup"
            description="Brudebukett, knapphullsblomst, samt blomsterdekor og små detaljer som gjør bryllupsdagen helt unik."
            imageSrc="/landing/bridal-girl-flowers.jpg"
          />
          <ImageTextLink 
            title="Spesielle anledninger"
            description="Enten det er frieri, bursdagsfeiring, konfirmasjon eller en kreativ workshop, vi leverer blomster og dekor til din anledning."
            imageSrc="/landing/giving-flowers.jpg"  
          />
        </div>

        <div className="flex justify-center">
          <div className="md:max-w-3xl mx-8 md:mx-4 text-center md:text-left">
            <p className="text-2xl md:text-6xl font-extralight leading-snug">&quot;Vi ønsker å gi vår varmeste anbefaling til Sara i Full Vase - en dyktig, profesjonell og pålitelig samarbeidspartner.&quot;</p>
            <p className="mt-8 font-bold font-sans"><span className="pr-2">— </span>MATHILDE S.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-12 justify-center items-center gap-4 mx-4">
          <div className="w-4/5 md:w-1/3">
            <Image
              src="/landing/workshop-girls.jpg"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>          
          <div className="w-4/5 md:w-1/3">
            <Image
              src="/landing/workshop-tie-bouquet.jpg"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>          
        </div>

        <div className="py-4 overflow-hidden">
          <div className="animate-scroll-ville-skjonne whitespace-nowrap flex">
            {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className="shrink-0 mr-8">
                <Image
                  src="/landing/ville-skjonne.jpg"
                  alt="accessorie full vase"
                  width={800}
                  height={400}
                  className="h-32 w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute text-center max-w-4xl text-white rounded-lg z-10 top-100 mx-12">
            <p className="text-4xl md:text-8xl">Blomster kan være både prakt og poesi.</p>   
            <p className="mt-16 md:text-2xl mx-12 md:mx-48 max-w-sm font-sans">Full Vase jobber med ulike ønsker, visjoner og blomster til våre kunder.</p>
            <Button type="link" href="/contact" size="middle" className="mt-8 text-white! hover:text-fv-200! underline! hidden!">
              Se hele portefølgen
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/landing/girls-in-flower-field.jpg"
              alt="Full Vase Hero"
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover"
              style={{ objectPosition: '67% center' }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
