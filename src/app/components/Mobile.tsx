import React from "react";
import Image from "next/image";
import {
  Album,
  Announcements,
  Clock,
  IconButton,
  MobileFooter,
  Modal,
  NowPlaying,
  Player,
} from "../components";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useWindowSize } from "../hooks/useWindowSize";
import Link from "next/link";

const MobileLayout: React.FC = () => {
  const { nowPlaying } = useNowPlaying();
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col relative bg-cover bg-no-repeat">
      <header className="flex justify-center items-center px-4 py-4 bg-transparent relative z-10">
        <div className="flex items-center">
          <Image
            src="logo.svg"
            alt="Logo"
            width={width * 0.3 || 60}
            height={40}
          />
        </div>
      </header>

      <main
        className="flex-grow flex flex-col items-center px-4 py-8 rounded-t-3xl bg-[#00EDA6] relative z-10"
        style={{
          backgroundImage: "url('./background-mobile.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col text-center">
          <p className="mt-2 text-2xl font-extrabold">www.radyoklasik.online</p>
          <p className="mt-1 text-base">HERKES İÇİN KLASİK MÜZİK</p>
        </div>

        <Album
          src={nowPlaying?.thumb}
          alt="Morning Delight"
          width={width * 0.6}
          height={width * 0.6}
        />

        <div className="bg-white rounded-t-3xl fixed bottom-0 h-1/3 w-full">
          <div className="flex flex-col items-center justify-center p-4">
            <Player width={width * 0.15} height={width * 0.15} />
            <NowPlaying className="text-center mt-2" />
          </div>
        </div>
      </main>

      <MobileFooter />
    </div>
  );
};

export default MobileLayout;
