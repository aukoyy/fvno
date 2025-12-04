'use client';

import { CloseOutlined, InstagramOutlined, MenuOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./nav";
import Image from "next/image";
import classNames from "classnames";
import { Button } from "antd";
import Link from "next/link";
import { MotionDivFadeDown } from "@/components/motion/MotionDivFadeDown";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // is the menu open
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(false); // Start transparent for white theme pages
  const [showShadow, setShowShadow] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('/nav/workshop-girls.jpg');
  const pathname = usePathname();
  
  const whiteThemePages = ['/', '/event'];
  const isWhiteThemePage = whiteThemePages.includes(pathname);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (isWhiteThemePage) {
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true);
          if (currentScrollY > 50) {
            setTimeout(() => {
              if (window.scrollY > 50) {
                // console.log('Setting showHeader to true from scroll up');
                setShowHeader(true);
                setShowShadow(true);
              }
            }, 100);
          } else {
            setShowHeader(false);
            setShowShadow(false);
          }
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setShowHeader(false);
          setShowShadow(false);
        }
      } else {
        // console.log('Setting showHeader to true for non-white theme page');
        setShowHeader(true);
        setShowShadow(currentScrollY > 10); 
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY, pathname, isWhiteThemePage, showHeader]);

  // Preload menu background image
  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = '/nav/workshop-girls.jpg';
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
    <MotionDivFadeDown>
      <header className={classNames(`fixed py-8 flex items-center w-full z-50 transition-all duration-300`, {
        'translate-y-0': isVisible,
        '-translate-y-full': !isVisible,
        'bg-white backdrop-blur-sm text-fv-900': showHeader,
        'bg-transparent text-white': !showHeader,
        'shadow-lg': showShadow,
      })}>
        {/* Left: Menu button */}
        <div 
          onClick={() => handleMenuToggle()} 
          className="cursor-pointer p-6 shrink-0"
        >
          {!(isOpen && !isClosing) && (
            <div className={classNames("flex space-x-2 transition-colors duration-200", {
              "text-white hover:text-fv-200": isWhiteThemePage && !showHeader,
              "text-fv-900 hover:text-fv-700": !isWhiteThemePage || showHeader,
            })}>
              <MenuOutlined className="text-2xl" /> <p>MENY</p>
            </div>
          )}
        </div>
        
        {/* Center: Title */}
        <div 
          className={classNames("flex-1 flex justify-center items-center", {
            "hidden": isOpen && !isClosing,
          })}
        >
          <Link href="/" className="w-45 lg:w-72">
            <Image 
              src={isWhiteThemePage && !showHeader ? "/logo-white.png" : "/logo-black.png"}
              alt="Logo" 
              width={250} 
              height={100} 
              style={{ width: "auto", height: "auto" }}
              className={classNames("transition-opacity duration-300")}
            />
          </Link>
        </div>
        
        {/* Right: Instagram + Contact button */}
        {(!isOpen || isClosing) && (
          <div 
            className="hidden md:flex space-x-5 mr-10 items-center shrink-0"
          >
            <Link 
              href="https://www.instagram.com/fullvase.no/" 
              className={classNames("flex items-center transition-colors duration-200", {
                "text-white!": isWhiteThemePage && !showHeader,
                "hover:text-fv-200!": isWhiteThemePage && !showHeader,
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="text-2xl" />
            </Link>
            <Link href="/contact">
              <Button 
                type="primary" 
                size="large"
                shape="round"
              >
                Kontakt oss
              </Button>
            </Link>
          </div>
        )}      
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
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              {/* Menu Content */}
              <div className="flex items-center justify-center h-full bg-black/55">
                <div className={`text-center text-white ${isClosing ? '' : 'animate-fade-in'}`}>
                  <Nav setIsOpen={setIsOpen} setBackgroundImage={setBackgroundImage} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Close button overlay - stays on top */}
          <div className="absolute top-6 left-6 z-10 p-4 -m-4 py-12 cursor-pointer" onClick={() => handleMenuToggle()}>
            <div className="text-white flex space-x-2 items-center hover:text-fv-200">
              <CloseOutlined className="text-2xl" /><p>MENY</p>
            </div>
          </div>
        </div>
      )}
    </MotionDivFadeDown>
  )
}