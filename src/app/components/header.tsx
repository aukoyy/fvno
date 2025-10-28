'use client';

import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      // Add background when scrolled away from top
      setHasBackground(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={`fixed flex w-full p-8 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      hasBackground ? 'bg-white/90 backdrop-blur-sm shadow-lg text-gray-900' : 'bg-transparent text-white'
    }`}>
      <div onClick={() => handleMenuToggle()} className="cursor-pointer">
        {isOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
      </div>
      <div className="flex justify-center w-full">
        <h1 className="absolute text-3xl">FULL VASE</h1>
      </div>
      <h1 className="hidden">third</h1>
    </header>
  )
}