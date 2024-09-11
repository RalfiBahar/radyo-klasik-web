"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import useChat from "../hooks/useChat";
import Image from "next/image";

const ChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  const { messages, fetchMessages, sendMessage, error } = useChat();

  useEffect(() => {
    // Fetch messages on component load
    if (isNameSet) {
      fetchMessages();
    }
  }, [isNameSet]);

  const handleNameSubmit = () => {
    const username = `${firstName} ${lastName}`;
    Cookies.set("username", username);
    setIsNameSet(true);
  };

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      sendMessage(messageContent);
      setMessageContent(""); // Clear input
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleModal} className="cursor-pointer mx-3">
        <Image src="/chat.svg" alt="Chat Icon" width={50} height={50} />
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

            {/* Display name input if the name is not set */}
            {!isNameSet ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border p-2 rounded w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border p-2 rounded w-full mb-4"
                />
                <button
                  onClick={handleNameSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Enter Chat
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Chat Room</h2>

                {/* Messages */}
                <div className="mb-4 h-64 overflow-y-auto border p-4 rounded">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <div key={msg.id} className="text-left mb-2">
                        <strong>{msg.sender}:</strong> {msg.message}
                        <br />
                        <small>
                          {new Date(msg.timestamp).toLocaleString()}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p>No messages yet</p>
                  )}
                </div>

                {/* Error display */}
                {error && <p className="text-red-500">{error}</p>}

                {/* Input for sending message */}
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  className="border p-2 rounded w-full mb-4"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
