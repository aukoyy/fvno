import { Button } from "antd";
import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="pt-34 md:text-lg">
      <div className="absolute top-54 text-white text-center flex flex-col items-center w-full">
        <h1 className="text-8xl">Event & Anledning</h1>
        <p className="text-3xl mt-12">Blomster til store og små anledninger</p>
        <div className="w-32 mt-12">
          <Image
            src="/event/circle-white.png"
            alt="Logo"
            width={500}
            height={500}
          />    
        </div>
      </div>
      <Image
        src="/event/tise-stage.jpg"
        alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
        width={500}
        height={500}
        className="w-screen h-screen object-cover"
      />  
      
      <div className="p-24 max-w-7xl mx-auto text-center">
        <h2 className="text-7xl mb-12">
          Full Vase leverer blomster til bedriftsarrangementer, konfirmasjon, babyshower, utdrikningslag, festivaler, prisutdelinger, julebord og andre spesielle anledninger – alltid med fokus på helhet, stemning og uttrykk.
        </h2>
        <p className="max-w-xl text-3xl mx-auto">Er du en bedrift og planlegger en stilfull gallamiddag, en produktlansering eller et storslått firmaarrangement? Vi leverer alltid med samme grad av kreativitet, omtanke og profesjonalitet.</p>
        <Button type="link" href="/contact" size="middle" className="underline! font-bold!">
          SEND FOREDSPØRSEL
        </Button>

        <div>
          <div>
            {/* <Image
              src="/event/event-collage-2.jpg"
              alt="Kollasj av bilder fra ulike eventer dekorert med blomster fra Full Vase"
              width={100}
              height={100}
            /> */}
          </div>
          <div>
            <h2>Våre tjenester for event & anledning inkluderer:</h2>
            <ul>
                <li>Skreddersydd blomsterdesign tilpasset tema eller bedriftprofil</li>
                <li>Blikkfangende installasjoner, borddekor, blomsterbukett til konfransier og sceneblomster</li>
                <li>Workshop - lag din egen blomsterkrans eller bukett</li>
                <li>Blomsterstasjon eller `&quot;`flower bar`&quot; der vi klargjør blomster som gjestene kan ta med hjem</li>
                <li>Levering, oppsett og nedrigg på stedet</li>
            </ul>
          </div>

        </div>
      </div>

    </main>
  )
}