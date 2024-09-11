"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface NowPlaying {
  album: string;
  artist: string;
  title: string;
  thumb: string;
}

interface NowPlayingContextProps {
  nowPlaying: NowPlaying | null;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  resetTrack: () => void;
}

const NowPlayingContext = createContext<NowPlayingContextProps | undefined>(
  undefined
);

export const NowPlayingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const resetTrack = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          "https://www.radiojar.com/api/stations/bw66d94ksg8uv/now_playing/"
        );
        const data = await response.json();
        setNowPlaying(data);
      } catch (error) {
        console.error("Error fetching now playing info:", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NowPlayingContext.Provider
      value={{ nowPlaying, isPlaying, setIsPlaying, resetTrack }}
    >
      {children}
    </NowPlayingContext.Provider>
  );
};

export const useNowPlayingContext = () => {
  const context = useContext(NowPlayingContext);
  if (context === undefined) {
    throw new Error(
      "useNowPlayingContext must be used within a NowPlayingProvider"
    );
  }
  return context;
};
