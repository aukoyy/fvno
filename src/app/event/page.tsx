import { Button } from "antd";
import Image from "next/image";

export default function EventPage() {
  return (
    <main className="font-serif">
      <div className="relative w-screen h-screen flex items-center justify-center">
        <Image
          src="/event/tise-stage.jpg"
          alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />  
        <div className="text-white text-center flex flex-col items-center mb-24 z-10">
          <h1 className="text-6xl lg:text-8xl">Event & Anledning</h1>
          <p className="text-lg lg:text-3xl mt-12 font-sans">Blomster til store og små anledninger</p>
        </div>
        <div className="absolute bottom-32 w-24 lg:w-56">
          <Image
            src="/event/circle-white.png"
            alt="Logo"
            width={500}
            height={500}
          />    
        </div>
      </div>
      
      <div className="p-12 md:p-24 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl leading-snug font-light font-serif">
          Full Vase leverer blomster til bedriftsarrangement, konfirmasjon, babyshower, utdrikningslag, festivaler, prisutdelinger, julebord og andre spesielle anledninger - alltid med fokus på helhet, stemning og uttrykk.
        </h2>
        <p className="max-w-xl text-lg mx-auto font-extralight mt-18 font-sans">
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
          <div className="lg:w-1/2 lg:mt-0 mt-12 text-left flex flex-col justify-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light leading-snug">Våre tjenester for event & anledning inkluderer:</h2>
              <div>
                <ul className="mt-8 ml-6 list-disc list-outside space-y-4 font-sans text-xl">
                    <li>Skreddersydd blomsterdesign tilpasset tema eller bedriftprofil</li>
                    <li>Blikkfangende installasjoner, borddekor, blomsterbukett til konfransier og sceneblomster</li>
                    <li>Workshop - lag din egen blomsterkrans eller bukett</li>
                    <li>Blomsterstasjon eller &quot;flower bar&quot; der vi klargjør blomster som gjestene kan ta med hjem</li>
                    <li>Levering, oppsett og nedrigg på stedet</li>
                </ul>
              </div>
              <Button type="link" href="/contact" size="large" className="underline! mt-6 ml-2">
                Kontakt oss her
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative w-full flex items-center justify-center text-center mt-18">
        <Image
          src="/event/boule-dog.jpg"
          alt="Scenen på Tise Awards dekorert med blomster fra Full Vase"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />  
        <div className="text-white py-96">
          <h3 className="text-5xl lg:text-7xl font-light mx-4">Hva passer til ditt event?</h3>
          <Button type="link" href="/portfolio" size="large" className="underline! mt-6 text-white! hover:text-fv-200! pl-0! hidden!">
            Få inspirasjon fra tidligere events i porteføljen vår.
          </Button>
        </div>
      </div>

      <div className="flex flex-col mx-12 md:mx-auto text-center mt-40 max-w-xl space-y-8">
        <h2 className="text-6xl font-light">Våre faste partnere</h2>
        <p className="mt-8 font-sans lg:text-xl">Full Vase er stolt samarbeidspartner av flere fantastiske lokaler hvor du kan ha ditt event.</p>
        <Button type="link" href="https://www.gamlelogen.no/" size="large" className="underline! font-bold!">
          Gamle Logen
        </Button>
        <Button type="link" href="https://villa-lilleborg.no/" size="large" className="underline! font-bold!">
          Villa Lilleborg
        </Button>
        <Button type="link" href="https://www.stortingsgata.no/" size="large" className="underline! font-bold!">
          Stortingsgata Kurs & Konferanse
        </Button>
        <p className="font-sans lg:text-xl">
          Booker du arrangementet ditt hos våre samarbeidspartnere, kan du være trygg på at blomsterdekorasjonene harmonerer med lokalets uttrykk og setter prikken over i-en på arrangementet.
        </p>
      </div>

      <div className="text-center mt-24 flex justify-around items-center bg-fv-300">
        <div className="px-4">
          <Image
              src="/event/gamlelogen-logo.webp"
              alt="Gamle Logen Logo"
              width={500}
              height={500}
            /> 
        </div>
        <div className="w-36">
          <Image
              src="/event/villa-lilleborg.png"
              alt="Villa Lilleborg Logo"
              width={500}
              height={500}
            /> 
        </div>
        <div className="px-4">
          <Image
              src="/event/stortingsgata.svg"
              alt="Stortingsgata Logo"
              width={500}
              height={500}
          />
        </div>
      </div>

      <div className="text-center mt-24">
        <p className="italic text-2xl">Ønsker du å inngå samarbeid?</p>
        <Button type="link" href="/contact" size="large" className="underline! mt-6">
          Send forespørsel
        </Button>
      </div>
      <div className="mt-56"></div>
    </main>
  )
}