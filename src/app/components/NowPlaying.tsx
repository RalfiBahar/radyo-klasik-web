"use client";

import React from "react";
import { useNowPlaying } from "../hooks/useNowPlaying";

const NowPlayingInfo: React.FC = () => {
  const nowPlaying = useNowPlaying();

  return (
    <>
      {nowPlaying ? (
        <p>
          Now Playing:
          <br />
          {nowPlaying.artist} - "{nowPlaying.title}"
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default NowPlayingInfo;
