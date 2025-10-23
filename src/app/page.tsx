import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Image
          src="/hero-placeholder.jpg"
          alt="Full Vase Hero"
          width={1920}
          height={1080}
          className="w-screen h-screen object-cover"
        />
        <h1 className="text-4xl font-bold mb-4">Velkommen til Full Vase</h1>     
        <p>Frodig blosterdesign til ditt event</p>   
        <p>Vi tror på blomster som forteller historier, om kjærlighet, glede og alt det vakre som gjør en dag uforglemmelig. Fyll vasen med minner og blomster.
        <p>Utforsk våre tjenester</p>
        </p>
        <div className="py-18 bg-cyan-900">
        <p className="text-7xl mx-24 text-center">Blomster du faktisk synes er skikkelig vakre. Vi designer din visjon til ditt event eller bryllup.</p>
        </div>
      </main>
    </div>
  );
}
