import Image from "next/image";
import Head from "next/head";
import { Header, Player } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Klasik - Herkes için Klasik Muzik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center px-80 py-8">
        <Image src="/logo.png" alt="Klasik Logo" width={250} height={150} />
        <div className="text-right flex flex-row justify-center items-center">
          <p className="text-base">HERKES iÇiN KLASiK MUZiK</p>
          <button className="ml-4">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow bg-green-500">
        <div className="flex flex-row justify-center items-center h-full bg-black">
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="w-48">
                <h2 className="text-2xl font-bold mb-2">ANNOUNCEMENTS</h2>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </p>
              </div>
              <div className="w-40">
                <h1 className="text-5xl font-bold mb-2">MORNING DELIGHT</h1>
                <p className="mb-4">
                  HER PAZAR SABAHI
                  <br />
                  10:00-12:00
                </p>
                <button className="border border-black px-4 py-2">
                  ON AIR
                </button>
              </div>
            </div>

            <div className="ml-20 flex items-center">
              <Image
                src="/album.png"
                alt="Morning Delight"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white px-80 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Player />
            <p>
              Now Playing:
              <br />
              Radyo Klasik Online - "Best Known Classical Pieces"
            </p>
          </div>
          <button>
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
