import { Button } from "antd";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-fv-250 flex justify-center pb-24">
      <div className="px-12 py-24 max-w-8xl">
        <p className="text-3xl md:text-6xl font-serif">La din blomsterdekorasjon være nestemanns inspirasjon.</p>
        <div className="mt-12 md:flex justify-between text-xl">
          <p>Hvilken anledning trenger du blomster til? </p>
          <Link href="/contact">
            <Button type="primary" size="large" shape="round" className="mt-6 md:mt-0">
              Snakk med oss
            </Button>
          </Link>
        </div>
        <hr className="text-fv-500 mt-12 max-w-sm" />
      </div>
    </footer>
  );
}