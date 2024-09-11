"use client";

import React, { useEffect } from "react";
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
  RecordingItem,
} from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { useRecordings } from "../context/RecordingsContext";
import { BackButton } from "../components";
import LoadingScreenMobile from "./LoadingScreenMobile";

const PastProgramsMobile: React.FC = () => {
  const { width, height } = useWindowSize();
  const { recordingsLoaded, recordings, fetchRecordings } = useRecordings();

  useEffect(() => {
    fetchRecordings();
  }, [fetchRecordings]);

  if (!recordingsLoaded && recordings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingScreenMobile />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col relative bg-cover bg-no-repeat">
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
        className="flex-grow flex flex-col items-center px-4 py-8 rounded-t-3xl bg-[#00EDA6] relative z-10 w-full"
        style={{
          backgroundImage: "url('./background-mobile.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col text-center w-full">
          <div className="flex justify-center items-center w-full p-3">
            <BackButton href="/" />
            {/* Centered Title */}
            <h1 className="text-2xl font-bold">Past Programs</h1>
          </div>

          {recordings.map((recording) => (
            <RecordingItem key={recording.id} recording={recording} />
          ))}
        </div>
      </main>
      <MobileFooter />
    </div>
  );
};

export default PastProgramsMobile;
