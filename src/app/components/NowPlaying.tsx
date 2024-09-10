"use client";

import React from "react";
import { useNowPlayingContext } from "../context/NowPlayingContext";

interface NowPlayingInfoProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const NowPlayingInfo: React.FC<NowPlayingInfoProps> = ({ ...props }) => {
  const { nowPlaying } = useNowPlayingContext();

  return (
    <div className="w-[26rem]">
      {nowPlaying ? (
        <div className="flex flex-col">
          <p className="font-extrabold"> Now Playing:</p>
          <p {...props}>
            {nowPlaying.artist}
            <br />
            &quot;{nowPlaying.title}&quot;
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="font-bold"> Now Playing:</p>
          <p {...props}>
            Radyo Klasik Online
            <br />
            &quot;Classical Music for Relaxing&quot;
          </p>
        </div>
      )}
    </div>
  );
};

export default NowPlayingInfo;
