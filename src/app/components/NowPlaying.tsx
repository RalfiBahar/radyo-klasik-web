"use client";

import React from "react";
import { useNowPlaying } from "../hooks/useNowPlaying";

interface NowPlayingInfoProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const NowPlayingInfo: React.FC<NowPlayingInfoProps> = ({ ...props }) => {
  const { nowPlaying } = useNowPlaying();

  return (
    <div>
      {nowPlaying ? (
        <p {...props}>
          <p className="font-bold"> Now Playing:</p>
          {nowPlaying.artist}
          <br />
          &quot;{nowPlaying.title}&quot;
        </p>
      ) : (
        <p {...props}>
          <p className="font-bold"> Now Playing:</p>
          Radyo Klasik Online
          <br />
          &quot;Classical Music for Relaxing&quot;
        </p>
      )}
    </div>
  );
};

export default NowPlayingInfo;
