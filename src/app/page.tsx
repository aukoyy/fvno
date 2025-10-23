import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="absolute md:ml-8 mt-100 md:mt-130 z-10 text-white  p-6 rounded-lg"> {/* bg-black/20 */}
          <h1 className="text-xl">VELKOMMEN TIL FULL VASE</h1>     
          <p className="mt-4 text-5xl">Frodig blosterdesign til ditt event</p>   
          <p className="mt-8 max-w-xl">Vi tror på blomster som forteller historier, om kjærlighet, glede og alt det vakre som gjør en dag uforglemmelig. Fyll vasen med minner og blomster.</p>
          <p className="mt-4 text-lg pl-8">-- Utforsk våre tjenester</p>
        </div>
        <Image
          src="/hero-placeholder.jpg"
          alt="Full Vase Hero"
          width={1920}
          height={1080}
          className="w-screen h-screen object-cover"
        />
        <div className="py-4 bg-fv-cyan-600">
          <p>KLAR FOR EN FRODIG FULL VASE?</p>
        </div>
        <div className="py-18 bg-fv-cyan-400">
          <p className="text-7xl mx-24 text-center">Blomster du faktisk synes er skikkelig vakre. Vi designer din visjon til ditt event eller bryllup.</p>
        </div>
      </main>
    </div>
  );
}
