"use client";

import React from "react";
import Image from "next/image";
import { MobileFooter } from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { BackButton } from "../components";
import { CircularProgress } from "@mui/material";

const LoadingScreenMobile: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col relative bg-cover bg-no-repeat w-full justify-center items-center">
      <header className="flex justify-center items-center px-4 py-4 bg-transparent relative z-10">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={width * 0.3 || 60}
            height={40}
          />
        </div>
      </header>

      <main
        className="flex-grow flex flex-col items-center px-4 py-8 rounded-t-3xl bg-[#00EDA6] relative z-10 w-full pb-32"
        style={{
          backgroundImage: "url('./background-mobile.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center w-full p-3">
          <BackButton href="/" />
          <h1 className="text-2xl font-bold">Past Programs</h1>
        </div>
        <div className="flex flex-grow flex-0.5 justify-center items-center">
          <CircularProgress sx={{ color: "#000" }} />
        </div>
      </main>
      <MobileFooter />
    </div>
  );
};

export default LoadingScreenMobile;
