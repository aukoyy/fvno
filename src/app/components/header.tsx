'use client';

import { CloseOutlined, InstagramOutlined, MenuOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";
import Nav from "./nav";
import Image from "next/image";
import classNames from "classnames";
import { Button } from "antd";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
        // Only show background after header is visible and settled
        if (currentScrollY > 50) {
          setTimeout(() => {
            if (window.scrollY > 50) { // Double check scroll position
              setShowBackground(true);
            }
          }, 100); // Small delay to let header settle
        } else {
          setShowBackground(false);
        }
      } 
      // Hide header when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setShowBackground(false); // Immediately hide background
      }
      

      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  // Preload menu background image
  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = '/nav-img-min.jpg';
    }
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (isOpen || isClosing)) {
        // Close menu logic (same as handleMenuToggle when closing)
        setIsClosing(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
        }, 300);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isClosing]);

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
      <header className={`fixed py-8 flex items-center w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        showBackground ? 'bg-white/90 backdrop-blur-sm shadow-lg text-gray-900' : 'bg-transparent text-white'
      }`}>
        {/* Left: Menu button */}
        <div onClick={() => handleMenuToggle()} className="cursor-pointer p-6 shrink-0">
          {!(isOpen && !isClosing) && (
            <div className="flex space-x-2"><MenuOutlined className="text-2xl" /> <p>meny</p></div>
          )}
        </div>
        
        {/* Center: Title */}
        <div className="flex-1 flex justify-center items-center">
          <Image 
            src="/logo-black.png" 
            alt="Logo" 
            width={250} 
            height={100} 
            className={classNames("transition-opacity duration-300", {
              "hidden": !showBackground,
            })}
          />
          <Image 
            src="/logo-white.png" 
            alt="Logo" 
            width={250} 
            height={100} 
            className={classNames("transition-opacity duration-300", {
              "hidden": showBackground,
            })}
          />
          <div className="absolute right-10 md:flex space-x-5 hidden">
            <Link 
              href="https://www.instagram.com/fullvase.no/" 
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="text-2xl" />
            </Link>
            <Button 
              type="primary" 
              href="/contact" 
              className="bg-fv-cyan-600! hover:bg-fv-cyan-800!"
              size="large"
              shape="round"
            >
              Kontakt oss
            </Button>
          </div>
        </div>
        
        {/* Right: Empty space for balance */}
        <div className="shrink-0 w-24"></div>
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
          <div className="absolute top-6 left-6 z-10 p-4 -m-4 py-12 cursor-pointer" onClick={() => handleMenuToggle()}>
            <div className="text-white">
              <CloseOutlined className="text-2xl" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}