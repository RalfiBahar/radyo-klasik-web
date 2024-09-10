"use client";
import React from "react";
import { useNowPlayingContext } from "../context/NowPlayingContext";

const NowPlayingDisplay: React.FC = () => {
  const { isPlaying, nowPlaying } = useNowPlayingContext();

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md">
      {isPlaying ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">Now Playing</h2>
          <p className="mt-2 text-lg">
            <strong>Artist:</strong> {nowPlaying?.artist || "Unknown Artist"}
          </p>
          <p className="mt-1 text-lg">
            <strong>Title:</strong> {nowPlaying?.title || "Unknown Track"}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">Nothing is Playing</h2>
          <p className="mt-2 text-lg">Tune in to Radyo Klasik Online!</p>
        </div>
      )}
    </div>
  );
};

export default NowPlayingDisplay;
