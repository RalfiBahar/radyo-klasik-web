// components/RecordingItem.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatTime } from "../helpers/formatTime";

interface RecordingItemProps {
  recording: {
    album: string;
    artist: string;
    artwork: string;
    date: string;
    duration: number;
    filename: string;
    id: string;
    play_count: number;
    size: number;
    stream: string;
    title: string;
  };
}

const RecordingItem: React.FC<RecordingItemProps> = ({ recording }) => {
  const blurhash = "UbOC4{~VIBNG?uj[WBoerYMyt6azOqo0WBWV";
  const ARTWORK_URI = `${process.env.NEXT_PUBLIC_API_URL}/${recording.artwork}`;

  return (
    <Link href={`/recordings/${recording.id}`} passHref>
      <div className="m-2 p-2 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={ARTWORK_URI}
            alt={recording.title}
            layout="fill"
            objectFit="cover"
            className="rounded"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${blurhash}`}
          />
        </div>
        <div className="flex flex-col justify-center text-left">
          <p className="text-lg font-bold">{recording.title}</p>
          <p className="text-sm text-gray-600">{recording.artist}</p>
          <p className="text-xs text-gray-500">
            {formatTime(recording.duration)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecordingItem;
