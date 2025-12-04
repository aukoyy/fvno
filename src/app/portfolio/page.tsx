"use client";

import { Masonry } from "antd";
import Image from "next/image";


export default function Portfolio() {
  const gallerySliderImages = [
    '/portfolio/gallery-1.jpg',
    '/portfolio/gallery-2.jpg',
    '/portfolio/gallery-3.jpg',
    '/portfolio/gallery-4.jpg',
    '/portfolio/gallery-5.jpg',
  ]
  const brickWallImages = Array.from({ length: 29 }, (_, i) => `/portfolio/wall/brick-${i + 1}.jpg`);

  return (
    <main className="pt-34 md:text-lg font-serif mb-32">
      <div className="text-center mt-16 max-w-lg mx-6 sm:mx-auto">
        <h1 className="text-5xl md:text-7xl">Portefølje</h1>
        <p className="mt-12 font-sans">
          Utforsk våre tidligere blomsterdekorasjoner.
        </p>
      </div>

      {/* Small centered vertical line */}
      <div className="flex justify-center mt-16 text-gray-500">
        <div className="w-px h-16 bg-current"></div>
      </div>

      {/* Horizontal carousel */}
      <div className="mt-16 mb-12 overflow-hidden">
        <div className="animate-scroll-right flex w-max">
          {/* Duplicate the images for seamless loop */}
          {[...gallerySliderImages, ...gallerySliderImages].map((img, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={img}
                alt={`Gallery image ${(index % gallerySliderImages.length) + 1}`}
                width={256}
                height={320}
                className="w-60 h-80 md:w-120 md:h-160 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      
      
      <div className="mx-6 mt-32">
        <Masonry
          columns={{ xs: 1, sm: 2, lg: 3, xxl: 4 }}
          gutter={12}
          items={brickWallImages.map((img, index) => ({
            key: `item-${index}`,
            data: img,
          }))}
          itemRender={({ data }) => (
            <Image 
              src={data} alt="grid-image" width={535} height={350} 
            />
          )}
          />
      </div>
    </main>
  );
}