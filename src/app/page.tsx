import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <div className="absolute bottom-24 md:ml-8 text-white p-6 rounded-lg"> {/* bg-black/30 */}
          <h1 className="text-2xl md:text-4xl">VELKOMMEN TIL FULL VASE</h1>     
          <p className="mt-4 text-4xl md:text-7xl">Frodig blosterdesign til ditt event</p>   
          <p className="mt-8 max-w-2xl md:text-lg">Vi tror på blomster som forteller historier, om kjærlighet, glede og alt det vakre som gjør en dag uforglemmelig. Fyll vasen med minner og blomster.</p>
          <p className="mt-4 text-lg md:text-xl pl-8">-- Utforsk våre tjenester</p>
        </div>
        <Image
          src="/fv-hero-2-min.jpg"
          alt="Full Vase Hero"
          width={1920}
          height={1080}
          className="w-screen h-screen object-cover"
          style={{ objectPosition: '67% center' }}
        />
        <div className="py-4 bg-fv-400 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            {Array.from({ length: 100 }, (_, i) => (
              <span key={i} className="text-white text-2xl font-medium tracking-wider mx-4">
                KLAR FOR EN FRODIG FULL VASE?
              </span>
            ))}
          </div>
        </div>
        <div className="py-18 bg-fv-300 flex flex-col items-center">
          <p className="text-2xl md:text-6xl font-light text-center mx-18 max-w-2xl">Blomster du <i>faktisk</i> synes er skikkelig vakre. Vi designer din visjon til ditt event eller bryllup.</p>
          <p className="mt-8 underline">Se tidligere arbeid</p>
        </div>
      </main>
    </div>
  );
}
