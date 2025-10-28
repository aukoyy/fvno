'use client';

import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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

  // Preload menu background image
  useEffect(() => {
    const img = new Image();
    img.src = '/nav-img-min.jpg';
  }, []);

  const handleMenuToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      // Wait for fade-out animation to complete before hiding
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // 300ms fade-out duration
    }
  }

  return (
    <>
      <header className={`fixed flex items-center w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        hasBackground ? 'bg-white/90 backdrop-blur-sm shadow-lg text-gray-900' : 'bg-transparent text-white'
      }`}>
        {/* Left: Menu button */}
        <div onClick={() => handleMenuToggle()} className="cursor-pointer p-6 shrink-0">
          {(isOpen && !isClosing) ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
        </div>
        
        {/* Center: Title */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-3xl">FULL VASE</h1>
        </div>
        
        {/* Right: Empty space for balance */}
        <div className="shrink-0 w-16"></div>
      </header>

      {/* Menu Overlay with Image Background - render when open or closing */}
      {(isOpen || isClosing) && (
        <div className={`fixed inset-0 z-60 overflow-hidden pointer-events-auto transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* Clip mask to create reveal effect */}
          <div className={`w-full h-full ${isClosing ? '' : 'animate-clip-reveal'}`}>
            {/* Stationary background image */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/nav-img-min.jpg)',
              }}
            >
              {/* Menu Content */}
              <div className="flex items-center justify-center h-full bg-black/40">
                <div className={`text-center text-white ${isClosing ? '' : 'animate-fade-in'}`}>
                  <Nav setIsOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Close button overlay - stays on top */}
          <div className="absolute top-6 left-6 z-10 p-4 -m-4 cursor-pointer" onClick={() => handleMenuToggle()}>
            <div className="text-white">
              <CloseOutlined className="text-2xl" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}