import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="absolute bottom-24 md:ml-8 text-white p-6 rounded-lg"> {/* bg-black/30 */}
          <h1 className="text-xl">VELKOMMEN TIL FULL VASE</h1>     
          <p className="mt-4 text-5xl">Frodig blosterdesign til ditt event</p>   
          <p className="mt-8 max-w-xl">Vi tror på blomster som forteller historier, om kjærlighet, glede og alt det vakre som gjør en dag uforglemmelig. Fyll vasen med minner og blomster.</p>
          <p className="mt-4 text-lg pl-8">-- Utforsk våre tjenester</p>
        </div>
        <Image
          src="/fv-hero-2-min.jpg"
          alt="Full Vase Hero"
          width={1920}
          height={1080}
          className="w-screen h-screen object-cover"
          style={{ objectPosition: '67% center' }}
        />
        <div className="py-4 bg-fv-cyan-600 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            {Array.from({ length: 100 }, (_, i) => (
              <span key={i} className="text-white text-2xl font-medium tracking-wider mx-4">
                KLAR FOR EN FRODIG FULL VASE?
              </span>
            ))}
          </div>
        </div>
        <div className="py-18 bg-fv-cyan-400 flex flex-col items-center">
          <p className="text-2xl md:text-6xl font-light text-center mx-18 max-w-2xl">Blomster du <i>faktisk</i> synes er skikkelig vakre. Vi designer din visjon til ditt event eller bryllup.</p>
          <p className="mt-8 underline">Se tidligere arbeid</p>
        </div>
      </main>
    </div>
  );
}
