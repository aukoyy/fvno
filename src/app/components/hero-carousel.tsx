"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

type Slide = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  slides: Slide[];
  interval?: number; // ms between automatic slide changes
  children?: ReactNode; // overlay content shown on top of every slide
};

export default function HeroCarousel({ slides, interval = 6000, children }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Restarts whenever the slide changes, so clicking a dot gives the new slide a full interval
  useEffect(() => {
    const timer = setTimeout(() => setActiveIndex((i) => (i + 1) % slides.length), interval);
    return () => clearTimeout(timer);
  }, [activeIndex, interval, slides.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1920}
          height={1080}
          className={classNames(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            { "opacity-100": index === activeIndex, "opacity-0": index !== activeIndex }
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black/30"></div>

      {children}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Vis bilde ${index + 1}`}
            className={classNames("w-3 h-3 rounded-full bg-white transition-opacity cursor-pointer", {
              "opacity-100": index === activeIndex,
              "opacity-50 hover:opacity-75": index !== activeIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
}
