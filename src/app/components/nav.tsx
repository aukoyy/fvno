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
        { href: '/weddings', label: 'Bryllup' },
        { href: '/events', label: 'Bedrift og event' }
      ]
    },
    {
      items: [
        { href: '/about', label: 'Om oss' },
        { href: '/about', label: 'Om Sara' },
        { href: '/contact', label: 'Kontakt oss' }
      ]
    }
  ];

  const NavLink = ({ href, label }: NavItem) => (
    <Link 
      href={href}
      className='block hover:text-gray-300 transition-colors md:my-0 my-4'
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  const NavSection = ({ items }: NavGroup) => (
    <div className='md:flex justify-center md:space-x-18'>
      {items.map((item, index) => (
        <NavLink key={`${item.href}-${index}`} {...item} />
      ))}
    </div>
  );

  return (
    <nav className="text-4xl">
      {navGroups.map((group, index) => (
        <NavSection key={index} {...group} />
      ))}
    </nav>
  );
}