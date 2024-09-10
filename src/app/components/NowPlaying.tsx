"use client";

import React from "react";
import { useNowPlaying } from "../hooks/useNowPlaying";

interface NowPlayingInfoProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const NowPlayingInfo: React.FC<NowPlayingInfoProps> = ({ ...props }) => {
  const { nowPlaying } = useNowPlaying();

  return (
    <>
      {nowPlaying ? (
        <p {...props}>
          Now Playing:
          <br />
          {nowPlaying.artist}
          <br />
          &quot;{nowPlaying.title}&quot;
        </p>
      ) : (
        <p {...props}>
          Now Playing:
          <br />
          Radyo Klasik Online
          <br />
          &quot;Classical Music for Relaxing&quot;
        </p>
      )}
    </>
  );
};

export default NowPlayingInfo;
