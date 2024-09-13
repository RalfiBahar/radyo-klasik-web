"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useNowPlayingContext } from "../context/NowPlayingContext";
import ProgressBar from "./ProgressBar";

interface PlayerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  audioUrl?: string;
  isRecording?: boolean;
  className?: string;
}

const Player: React.FC<PlayerProps> = ({
  width = 100,
  height = 100,
  audioUrl = "https://stream.radiojar.com/bw66d94ksg8uv",
  isRecording = false,
  className = "",
  ...props
}) => {
  const { isPlaying, setIsPlaying } = useNowPlayingContext();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.pause();
      }
    };
  }, [audioUrl, setIsPlaying]);

  const togglePlay = (): void => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (!isRecording) {
        // If it's not a recording, reset the stream for live playback
        //console.log("loading from scratch");
        audioRef.current.currentTime = 0;
        audioRef.current.src = audioUrl;
        audioRef.current.load();
      }

      audioRef.current.play().catch((error: Error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    if (audioRef.current && isRecording) {
      const newValue = Array.isArray(value) ? value[0] : value;
      audioRef.current.currentTime = newValue;
      setProgress(newValue);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {isRecording && (
        <ProgressBar
          progress={progress}
          duration={duration}
          onSliderChange={handleSliderChange}
        />
      )}
      <button onClick={togglePlay} {...props}>
        {isPlaying ? (
          <Image
            src="/pause.svg"
            alt="Pause Icon"
            width={width}
            height={height}
          />
        ) : (
          <Image
            src="/play.svg"
            alt="Play Icon"
            width={width}
            height={height}
          />
        )}
      </button>
    </div>
  );
};

export default Player;
