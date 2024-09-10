"use client";

import React from "react";
import Image from "next/image";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  imgSrc,
  imgAlt,
  imgWidth = 50,
  imgHeight = 50,
  label,
  className,
  ...props
}) => {
  return (
    <button
      className={`p-8 flex justify-center items-center flex-col transition-transform duration-200 hover:opacity-70 ${className}`}
      {...props}
    >
      <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      <p>{label}</p>
    </button>
  );
};

export default IconButton;
