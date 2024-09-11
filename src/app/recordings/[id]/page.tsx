"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Player from "../../components/Player";
import { useRecordings } from "../../context/RecordingsContext";
import {
  IconButton,
  HeaderMobile,
  Modal,
  MobileFooter,
} from "@/app/components";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { useNowPlayingContext } from "@/app/context/NowPlayingContext";
import LoadingScreenMobile from "@/app/dynamicPages/LoadingScreenMobile";
//import { usePlayback } from "../../context/PlaybackContext";

const Recording: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const { recordings, fetchRecordings } = useRecordings();
  const [token, setToken] = useState<string | null>(null);
  const { width, height } = useWindowSize();
  const { resetTrack } = useNowPlayingContext();

  const recording = recordings.find((r) => r.id === id);

  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
      } catch (error) {
        console.error("Failed to fetch token", error);
      }
    };
    getToken();
    if (!recordings || !recording) {
      fetchRecordings();
    }
  }, []);

  if (!recording || !token) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingScreenMobile />
      </div>
    );
  }

  const songData = {
    id: recording.id,
    title: recording.title,
    artist: recording.artist,
    duration: recording.duration,
    thumb: `${process.env.NEXT_PUBLIC_API_URL}/${recording.artwork}`,
  };

  const streamWithToken = `${process.env.NEXT_PUBLIC_API_URL}/${recording.stream}?token=${token}`;
  console.log(streamWithToken);

  return (
    <div className="min-h-screen flex flex-col relative bg-cover bg-no-repeat">
      <HeaderMobile />
      <main
        className="flex-grow flex flex-col items-center px-4 py-20 rounded-t-3xl bg-[#00EDA6] relative z-10 w-full"
        style={{
          backgroundImage: "url('/background-mobile.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between items-center w-full px-3 absolute top-6">
          <button
            className="flex items-center text-black"
            onClick={() => {
              resetTrack();
              router.push("/recordings");
            }}
          >
            <Image
              src="/arrow-left.svg"
              alt="Back Arrow"
              width={24}
              height={24}
            />
            <span className="ml-2 text-lg">Back</span>
          </button>

          <h1 className="text-2xl font-bold text-center">Past Programs</h1>

          <div className="w-8"></div>
        </div>

        <Image
          src={songData.thumb}
          alt={recording.title}
          width={200}
          height={200}
          className="rounded-lg mb-6"
        />

        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl font-bold mb-4 text-black">
            {recording.title}
          </h1>
          <p className="text-xl text-black0 mb-4">{recording.artist}</p>
          {/* Pass audioUrl as a prop to Player */}
          <Player
            audioUrl={streamWithToken}
            width={100}
            height={100}
            isRecording={true}
            className="w-full"
          />
        </div>
      </main>
      <MobileFooter />
    </div>
  );
};

export default Recording;
