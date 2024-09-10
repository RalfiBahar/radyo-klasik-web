"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
  src?: string;
  width?: number;
  height?: number;
  title?: string;
  content?: string;
  className?: string;
  label?: string;
}

const Modal: React.FC<ModalProps> = ({
  src = "/hamburger.svg",
  width = 50,
  height = 50,
  title,
  content,
  className,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={src}
          alt="Menu Icon"
          width={width}
          height={height}
          onClick={toggleModal}
          className={className ? className : "cursor-pointer mx-3"}
        />
        <p>{label}</p>
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

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-left">
                {title ? title : "About Us"}
              </h2>
              <p className="mb-4 text-left">
                {content ? (
                  content
                ) : (
                  <>
                    This is an online radio for classical music lovers presented
                    by a father and son. <br />
                    All classical music enthusiasts are welcome to listen to
                    this radio 24/7. Our live interactive sessions are on
                    Sundays from 10:00 AM to 12:00 PM. <br />
                    E-Mail: radyoklasik01@gmail.com
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
