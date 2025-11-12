import Link from "next/link";

interface NavProps {
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItem {
  href: string;
  label: string;
}

interface NavGroup {
  items: NavItem[];
}

export default function Nav({ setIsOpen }: NavProps) {
  const navGroups: NavGroup[] = [
    {
      items: [
        { href: '/', label: 'Hjem' },
        { href: '/event', label: 'Event og anledning' },
        // { href: '/bryllup', label: 'Bryllup' }
      ]
    },
    {
      items: [
        // { href: '/about', label: 'Om oss' },
        // { href: '/portfolio', label: 'Portefølje' },
        // { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Kontakt' }
      ]
    }
  ];

  const NavLink = ({ href, label }: NavItem) => (
    <Link 
      href={href}
      className='block transition-colors my-4 text-white! hover:text-fv-200!'
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  const NavSection = ({ items }: NavGroup) => (
    <div className='lg:flex justify-between lg:space-x-24 lg:mt-12'>
      {items.map((item, index) => (
        <NavLink key={`${item.href}-${index}`} {...item} />
      ))}
    </div>
  );

  return (
    <nav className="lg:flex text-2xl md:text-3xl lg:text-6xl lg:space-x-24 font-serif">
      {navGroups.map((group, index) => (
        <NavSection key={index} {...group} />
      ))}
    </nav>
  );
}