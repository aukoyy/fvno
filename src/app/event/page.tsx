import { Button } from "antd";
import Image from "next/image";

export default function EventPage() {
  return (
    <main className="">
      <div className="relative w-screen h-screen flex items-center justify-center">
        <Image
          src="/event/tise-stage.jpg"
          alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />  
        <div className="text-white text-center flex flex-col items-center z-10">
          <h1 className="text-4xl lg:text-8xl">Event & Anledning</h1>
          <p className="text-lg lg:text-3xl mt-6 lg:mt-12">Blomster til store og små anledninger</p>
        </div>
        <div className="absolute bottom-32 w-32 lg:w-56">
          <Image
            src="/event/circle-white.png"
            alt="Logo"
            width={500}
            height={500}
          />    
        </div>
      </div>
      
      <div className="p-12 md:p-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl leading-snug font-light">
          Full Vase leverer blomster til bedriftsarrangement, konfirmasjon, babyshower, utdrikningslag, festivaler, prisutdelinger, julebord og andre spesielle anledninger - alltid med fokus på helhet, stemning og uttrykk.
        </h2>
        <p className="max-w-xl text-2xl mx-auto font-extralight mt-18">
          Er du en bedrift og planlegger en stilfull gallamiddag, en produktlansering eller et storslått firmaarrangement? Vi leverer alltid med samme grad av kreativitet, omtanke og profesjonalitet.
        </p>
        <Button type="link" href="/contact" size="middle" className="underline! font-bold! mt-6">
          SEND FOREDSPØRSEL
        </Button>

        <div className="mt-24 lg:flex gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/event/tise-presenter.jpeg"
              alt="Tise Awards presentatør med blomster fra Full Vase"
              width={2000}
              height={2000}
            />
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-12 text-left">
            <h2 className="text-4xl font-light leading-snug">Våre tjenester for event & anledning inkluderer:</h2>
            <ul className="mt-8 ml-6 list-disc list-outside space-y-4">
                <li>Skreddersydd blomsterdesign tilpasset tema eller bedriftprofil</li>
                <li>Blikkfangende installasjoner, borddekor, blomsterbukett til konfransier og sceneblomster</li>
                <li>Workshop - lag din egen blomsterkrans eller bukett</li>
                <li>Blomsterstasjon eller `&quot;`flower bar`&quot; der vi klargjør blomster som gjestene kan ta med hjem</li>
                <li>Levering, oppsett og nedrigg på stedet</li>
            </ul>
            <Button type="link" href="/contact" size="middle" className="underline! mt-6 ml-2">
              Kontakt oss her
            </Button>
          </div>

        </div>
      </div>
    <div className="mt-56"></div>
    </main>
  )
}