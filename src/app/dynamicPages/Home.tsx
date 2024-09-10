"use client";
import Image from "next/image";
import {
  Album,
  Announcements,
  Clock,
  Header,
  Modal,
  NowPlaying,
  Player,
} from "../components";
import { useNowPlaying } from "../hooks/useNowPlaying";

export default function Home() {
  const { isPlaying, nowPlaying } = useNowPlaying();

  return (
    <div
      className="min-h-screen bg-[#68EAAC] flex flex-col"
      style={{
        backgroundImage: "url('./background.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center px-60 py-8">
        {/* Announcements Section */}
        <div className="flex flex-col">
          <Announcements />

          {/* Live Broadcast Information */}
          <div className="border-2 border-black p-4 mt-6 inline-block w-48">
            <h3 className="text-2xl font-bold">CANLI YAYIN</h3>
          </div>
          <p className="mt-2 text-5xl font-bold">
            MORNING <br /> DELIGHT
          </p>
          <p className="mt-1 text-lg">
            HER PAZAR SABAHI <br /> 10:00-12:00
          </p>
        </div>

        {/* Image Section */}
        <Album
          src={nowPlaying?.thumb}
          alt="Morning Delight"
          className="m-20 mt-8 md:mt-0"
        />

        <div className="absolute right-64 bottom-40">
          <Clock />
        </div>
      </main>

      {/* Now Playing Section */}
      <footer className="bg-white py-4 px-64 flex justify-between items-center">
        <div className="flex items-center">
          <Player className="mx-4 w-auto" />
          <NowPlaying />
        </div>

        <div>
          {isPlaying ? (
            <img
              src={"/soundwave.gif"}
              alt="Volume Icon"
              width={60}
              height={60}
            />
          ) : (
            <img
              src={"/soundwave.png"}
              alt="Volume Icon"
              width={60}
              height={60}
            />
          )}
        </div>
      </footer>
    </div>
  );
}
