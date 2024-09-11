import React from "react";
import { ChatModal, IconButton, Modal } from ".";
import { useWindowSize } from "../hooks/useWindowSize";
import Link from "next/link";
import useAnnouncement from "../hooks/useAnnouncement";
import { useNowPlayingContext } from "../context/NowPlayingContext";

const MobileFooter: React.FC = ({}) => {
  const { width, height } = useWindowSize();
  const { announcement, loading, error } = useAnnouncement();
  const { resetTrack } = useNowPlayingContext();

  return (
    <footer
      className="bg-[#EEEEEE] rounded-t-3xl w-full fixed bottom-0 flex items-center justify-between z-50"
      style={{ height: `${height * 0.15}px` }}
    >
      <Link href="/recordings" onClick={resetTrack}>
        <IconButton
          imgSrc="/archive.svg"
          imgAlt="Archive"
          imgWidth={width * 0.1}
          imgHeight={width * 0.1}
          label="Archive"
        />
      </Link>

      <Modal
        src="/announce.svg"
        width={width * 0.1}
        height={width * 0.1}
        label="Announcements"
        title="Announcements"
        content={announcement || "No announcements found."}
      />

      <ChatModal onFooter={true} />
    </footer>
  );
};

export default MobileFooter;
