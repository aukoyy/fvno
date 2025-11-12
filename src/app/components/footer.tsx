import { Button } from "antd";

export default function Footer() {
  return (
    <footer className="bg-fv-250 flex justify-center mb-12">
      <div className="px-22 py-24 max-w-8xl">
        <p className="text-3xl md:text-6xl font-serif">La din blomsterdekorasjon være nestemanns inspirasjon.</p> {/* TODO: fix space bug. Triggers on screen size change */}
        <div className="mt-12 md:flex justify-between text-xl">
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