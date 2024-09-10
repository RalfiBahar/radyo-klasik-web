"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BackButtonProps {
  onClick?: () => void;
  href?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, href }) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(href ? href : "/recordings");
    }
  };

  return (
    <div className="absolute left-3">
      <button
        className="flex items-center text-black"
        onClick={handleBackClick}
      >
        <Image src="/arrow-left.svg" alt="Back Arrow" width={24} height={24} />
        <span className="ml-2 text-lg">Back</span>
      </button>
    </div>
  );
};

export default BackButton;
