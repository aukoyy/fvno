import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

interface NavProps {
  setIsOpen: (isOpen: boolean) => void;
  setBackgroundImage: (imageSrc: string) => void;
}

interface NavItem {
  href: string;
  label: string;
  imageSrc?: string;
}

interface NavGroup {
  items: NavItem[];
}

export default function Nav({ setIsOpen, setBackgroundImage }: NavProps) {
  const pathname = usePathname();
  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 200);
  }
  
  const navGroups: NavGroup[] = [
    {
      items: [
        { href: '/', label: 'Hjem', imageSrc: '/nav/workshop-girls.jpg' },
        { href: '/event', label: 'Event og anledning', imageSrc: '/nav/gl-event.jpg' },
        { href: '/bryllup', label: 'Bryllup', imageSrc: '/nav/proposal.jpg' }
      ]
    },
    {
      items: [
        { href: '/about', label: 'Om oss', imageSrc: '/nav/details-workshop.jpg' },
        { href: '/portfolio', label: 'Portefølje', imageSrc: '/nav/pumpkins.jpg' },
        { href: '/contact', label: 'Kontakt', imageSrc: '/nav/workshop-girls.jpg' }
      ]
    }
  ];

  const NavLink = ({ href, label, imageSrc }: NavItem) => {
    const isActive = pathname === href;
    
    return (
      <Link 
        href={href}
        className='block transition-colors my-4 text-white! hover:text-fv-200! relative'
        onClick={handleLinkClick}
        onMouseEnter={() => {
          if (imageSrc) {
            setBackgroundImage(imageSrc);
          }
        }}
      >
        <motion.span
          className="relative inline-block"
          whileHover="hover"
          initial="initial"
          variants={{
            initial: {},
            hover: {}
          }}
        >
          {label}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-white"
            variants={{
              initial: { width: isActive ? "100%" : "0%" },
              hover: { width: "100%" }
            }}
            animate={isActive ? "initial" : undefined}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.span>
      </Link>
    );
  };

  const NavSection = ({ items }: NavGroup) => (
    <div className='lg:flex justify-between lg:space-x-24 lg:mt-12'>
      {items.map((item, index) => (
        <NavLink key={`${item.href}-${index}`} {...item} />
      ))}
    </div>
  );

  return (
    <nav className="text-2xl md:text-3xl xl:text-6xl font-serif">
      {navGroups.map((group, index) => (
        <NavSection key={index} {...group} />
      ))}
    </nav>
  );
}