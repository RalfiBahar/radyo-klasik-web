"use client";
import Image from "next/image";
import { Header, Modal } from "../components";

export default function Landing() {
  return (
    <div
      className="min-h-screen bg-[#68EAAC] flex flex-col overflow-auto overflow-x-hidden md:overflow-hidden"
      style={{
        backgroundImage: "url('./background.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-8 md:px-16 lg:px-60">
        {/* Announcements Section */}
        <div className="flex flex-col justify-center md:mr-10 mb-8 md:mb-0 text-center md:text-left">
          {/* Live Broadcast Information */}
          <div className="border-2 border-black p-4 mt-6 inline-block">
            <h3 className="text-2xl md:text-4xl font-bold">Coming Soon...</h3>
          </div>
          <p className="mt-2 text-4xl md:text-6xl font-bold">
            MORNING <br /> DELIGHT
          </p>
          <p className="mt-1 text-base md:text-lg">
            Live Every Sunday <br /> 10:00-12:00
          </p>
          <div className="flex flex-row justify-center md:justify-start py-4">
            <a href="/landing">
              <Image
                src="/appstore.png"
                width={120}
                height={50}
                alt="appstore"
                className="mr-2"
              />
            </a>
            <a href="/landing">
              <Image
                src="/googleplay.png"
                width={120}
                height={50}
                alt="googleplay"
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/m1-portrait.png"
            width={150}
            height={300}
            alt="appMockup1"
            className="w-full md:w-auto"
          />
          <Image
            src="/m2-portrait.png"
            width={150}
            height={300}
            alt="appMockup2"
            className="w-full md:w-auto"
          />
          <Image
            src="/m3-portrait.png"
            width={150}
            height={300}
            alt="appMockup3"
            className="w-full md:w-auto"
          />
        </div>
      </main>

      {/* Now Playing Section */}
      <footer className="bg-white py-4 px-4 md:px-16 lg:px-64 flex justify-between items-center">
        <div className="flex items-center"></div>
      </footer>
    </div>
  );
}
