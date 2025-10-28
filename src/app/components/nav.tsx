import Link from "next/link";

interface NavProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function Nav({ setIsOpen }: NavProps) {
  const linkClassname = 'block hover:text-gray-300 transition-colors md:my-0 my-4'
  const linkGroupClassname = 'md:flex justify-center md:space-x-18'
  return (
    <nav className="text-4xl">
      <div className={linkGroupClassname}>
        <Link 
          href="/" 
          className={linkClassname}
          onClick={() => setIsOpen(false)}
        >
          Hjem
        </Link>
        <Link 
          href="/weddings"
          className={linkClassname}
          onClick={() => setIsOpen(false)}
        >
          Bryllup
        </Link>
        <Link 
          href="/events"
          className={linkClassname}
          onClick={() => setIsOpen(false)}
        >
          Bedrift og event
        </Link>
      </div>
      <div className={linkGroupClassname}>
        <Link 
          href="/about"
          className={linkClassname}
          onClick={() => setIsOpen(false)}
        >
          Om oss
        </Link>
        <Link 
          href="/contact" 
          className={linkClassname}
          onClick={() => setIsOpen(false)}
        >
          Kontakt
        </Link>
      </div>
    </nav>
  )
}