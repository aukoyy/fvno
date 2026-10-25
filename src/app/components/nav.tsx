import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface NavProps {
  setIsOpen: (isOpen: boolean) => void;
  setBackgroundImage: (imageSrc: string) => void;
}

interface NavItemProps {
  href: string;
  label: string;
  imageSrc?: string;
}

interface NavGroup {
  items: NavItemProps[];
}

export default function Nav({ setIsOpen, setBackgroundImage }: NavProps) {
  const pathname = usePathname();
  // The underlined item: starts at the current page and follows the last item hovered with a mouse
  const [highlightedHref, setHighlightedHref] = useState(pathname);

  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  const navGroups: NavGroup[] = useMemo(
    () => [
      {
        items: [
          { href: "/", label: "Hjem", imageSrc: "/nav/workshop-girls.jpg" },
          { href: "/event", label: "Event og anledning", imageSrc: "/nav/gl-event.jpg" },
          { href: "/bryllup", label: "Bryllup", imageSrc: "/nav/proposal.jpg" },
        ],
      },
      {
        items: [
          { href: "/about", label: "Om oss", imageSrc: "/nav/details-workshop.jpg" },
          { href: "/portfolio", label: "Portefølje", imageSrc: "/nav/pumpkins.jpg" },
          { href: "/contact", label: "Kontakt", imageSrc: "/nav/workshop-girls.jpg" },
        ],
      },
    ],
    []
  );

  // Set background image based on current pathname when component mounts
  useEffect(() => {
    const allItems = navGroups.flatMap((group) => group.items);
    const currentItem = allItems.find((item) => item.href === pathname);
    if (currentItem?.imageSrc) {
      setBackgroundImage(currentItem.imageSrc);
    }
  }, [pathname, setBackgroundImage, navGroups]);

  // Preload all navigation images when component mounts to prevent flash
  useEffect(() => {
    const allItems = navGroups.flatMap((group) => group.items);
    const imageSources = allItems.map((item) => item.imageSrc).filter(Boolean) as string[];

    imageSources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [navGroups]);

  return (
    <nav className="text-2xl md:text-3xl xl:text-6xl font-serif">
      {navGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="lg:flex justify-between lg:space-x-24 lg:mt-12">
          {group.items.map(({ href, label, imageSrc }) => {
            const isHighlighted = highlightedHref === href;

            return (
              <Link
                key={href}
                href={href}
                className="block transition-colors my-4 text-white! hover:text-fv-200! relative"
                onClick={handleLinkClick}
                onPointerEnter={(e) => {
                  // Only react to real mouse hover; touch taps should navigate on the first press
                  if (e.pointerType !== "mouse") return;
                  setHighlightedHref(href);
                  if (imageSrc) {
                    setBackgroundImage(imageSrc);
                  }
                }}
              >
                <span className="relative inline-block">
                  {label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    style={{ transformOrigin: "left" }}
                    initial={false}
                    animate={{ scaleX: isHighlighted ? 1 : 0 }}
                    // Animate the underline in, but hide the previous one instantly
                    transition={{
                      duration: isHighlighted ? 0.3 : 0,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
