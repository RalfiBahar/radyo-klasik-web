"use client";

import React from "react";
import Image from "next/image";

interface AlbumImageProps {
  src: string | undefined;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const AlbumImage: React.FC<AlbumImageProps> = ({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
}) => {
  return (
    <div className={`m-8 mt-8 ${className}`}>
      <Image
        src={src || "/album.png"}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: 10 }}
        priority
      />
    </div>
  );
};

export default AlbumImage;
