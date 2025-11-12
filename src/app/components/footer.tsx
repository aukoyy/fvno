import { Button } from "antd";

export default function Footer() {
  return (
    <footer className="bg-fv-300 flex justify-center">
      <div className="px-22 py-24 max-w-6xl">
        <p className="text-3xl md:text-6xl">La din blomsterdekorasjon være nestemanns inspirasjon.</p>
        <div className="mt-12 md:flex justify-between">
          <p>Hvilken anledning trenger du blomster til? </p>
          <Button type="primary" href="/contact" size="large" shape="round" className="mt-6 md:mt-0">
            Snakk med oss
          </Button>
        </div>
        <hr className="text-fv-500 mt-12 max-w-sm" />

      </div>
    </footer>
  );
}