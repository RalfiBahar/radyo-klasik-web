"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface NowPlaying {
  album: string;
  artist: string;
  title: string;
  thumb: string;
}

export const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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

  return { nowPlaying, isPlaying, setIsPlaying };
};
