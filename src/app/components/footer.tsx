import { Button } from "antd";
import Link from "next/link";
import { ExternalLinkIcon } from "./icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-fv-250 flex justify-center pb-24">
      <div className="px-12 py-24 max-w-8xl">
        <p className="text-3xl md:text-6xl font-serif">
          La din blomsterdekorasjon være nestemanns inspirasjon.
        </p>
        <div className="mt-12 md:flex justify-between text-xl">
          <p>Hvilken anledning trenger du blomster til? </p>
          <Link href="/contact">
            <Button type="primary" size="large" shape="round" className="mt-6 md:mt-0">
              Snakk med oss
            </Button>
          </Link>
        </div>
        <hr className="text-fv-500 mt-12" />
        <div className="mt-12">
          <p className="text-xl">MØT OSS ETTER AVTALE</p>
          <a className="flex mt-4" href="https://maps.app.goo.gl/qidCEse4SE7P7wnT6" target="_blank" rel="noopener noreferrer">
            <p>Grev Wedels Plass 2, 0151 Oslo</p>
            <ExternalLinkIcon className="ml-2 w-4" />
          </a>
        </div>
        <div className="mt-12 flex justify-end">
          <p className="text-xl">Følg oss på</p>
          <a href='https://www.instagram.com/fullvase.no/' target='_blank' rel='noopener noreferrer'>
            <Image
              src="/footer/instagram-icon.png" 
              alt="Instagram" 
              width={24}  
              height={24} 
              className="ml-4" 
            />
          </a>
          <a href='https://www.facebook.com/profile.php?id=61565082137564' target='_blank' rel='noopener noreferrer'>
            <Image 
              src="/footer/facebook-icon.png" 
              alt="Facebook" 
              width={24}  
              height={24} 
              className="ml-4" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
