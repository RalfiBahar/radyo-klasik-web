import React from "react";
import { IconButton, Modal } from ".";
import { useWindowSize } from "../hooks/useWindowSize";
import Link from "next/link";
import useAnnouncement from "../hooks/useAnnouncement";

const MobileFooter: React.FC = ({}) => {
  const { width, height } = useWindowSize();
  const { announcement, loading, error } = useAnnouncement();

  return (
    <footer
      className="bg-[#EEEEEE] rounded-t-3xl w-full absolute bottom-0 flex items-center justify-between z-50"
      style={{ height: `${height * 0.15}px` }}
    >
      <Link href="/recordings">
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

      <IconButton
        imgSrc="/chat.svg"
        imgAlt="Chat"
        imgWidth={width * 0.1}
        imgHeight={width * 0.1}
        label="Chat"
      />
    </footer>
  );
};

export default MobileFooter;
