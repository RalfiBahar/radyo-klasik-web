"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRecordings } from "../context/RecordingsContext";
import { RecordingItem } from ".";

interface PastProgramsModalProps {
  src?: string;
  width?: number;
  height?: number;
}

const PastProgramsModal: React.FC<PastProgramsModalProps> = ({
  src = "/archive.svg",
  width = 50,
  height = 50,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { recordingsLoaded, recordings, fetchRecordings } = useRecordings();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchRecordings();
  }, [fetchRecordings]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={src}
          alt="Archive Icon"
          width={width}
          height={height}
          onClick={toggleModal}
          className={"cursor-pointer mx-3"}
        />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-4xl"
            >
              &times;
            </button>

            <div className="flex flex-col text-center w-full">
              {recordings.map((recording) => (
                <RecordingItem key={recording.id} recording={recording} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PastProgramsModal;
