"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImagesGalleryProps {
  products: {
    images: string[];
    thumbnail: string;
  };
  layout?: "horizontal" | "vertical";
}

export default function ImagesGallery({ products, layout = "horizontal" }: ImagesGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const mainImage = selectedImage || products?.thumbnail;

  return (
    <div
      className={`flex flex-col-reverse gap-4 ${
        layout === "horizontal" ? "lg:flex-row" : "lg:flex-col"
      }`}
    >
      {/* Thumbnails */}
      <div
        className={`flex gap-4 justify-center lg:justify-start overflow-x-auto p-1 ${
          layout === "horizontal" ? "flex-row lg:flex-col" : "flex-row"
        }`}
      >
        {products?.images?.map((img: string, index: number) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`relative w-20 h-20  rounded-lg border-2 cursor-pointer overflow-hidden transition-all ${
              mainImage === img ? "border-blue-600 scale-105" : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <Image
              src={img}
              alt={`thumbnail ${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div 
        className="flex-1 relative aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-zoom-in" 
        onClick={() => setOpen(true)}
      >
        <Image
          src={mainImage}
          alt="product main"
          fill
          unoptimized
          priority
          className="object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

    </div>
  );
}