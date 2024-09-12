"use client";
import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import useChat from "../hooks/useChat";
import Image from "next/image";

interface ChatModalProps {
  onFooter?: boolean;
}

const ChatModal: React.FC<ChatModalProps> = ({ onFooter = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { messages, fetchMessages, sendMessage, error } = useChat();

  useEffect(() => {
    const username = Cookies.get("username");
    if (username) {
      setIsNameSet(true);
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    if (isNameSet) {
      fetchMessages();
    }
  }, [isNameSet]);

  const handleNameSubmit = () => {
    const username = `${firstName} ${lastName}`;
    Cookies.set("username", username, { expires: 30 });
    setIsNameSet(true);
  };

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      sendMessage(messageContent);
      setMessageContent(""); // Clear input after sending
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
    fetchMessages();
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (messages && Array.isArray(messages) && messages.length > 0) {
      scrollToBottom(); // Scroll to the bottom whenever messages change
    }
  }, [messages]);

  return (
    <>
      {!onFooter ? (
        <div onClick={toggleModal} className="cursor-pointer mx-3">
          <Image src="/chat.svg" alt="Chat Icon" width={50} height={50} />
        </div>
      ) : (
        <button
          onClick={toggleModal}
          className={`p-8 flex justify-center items-center flex-col transition-transform duration-200 hover:opacity-70`}
        >
          <Image src="/chat.svg" alt="Chat Icon" width={50} height={50} />
          <p>Chat</p>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            onFooter ? "-translate-y-32" : ""
          }`}
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
            style={{ width: onFooter ? "80%" : "60%" }}
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
                <div
                  className="mb-4 h-64 overflow-y-auto border p-4 rounded"
                  style={{ maxHeight: "400px" }} // Set a height to make it scrollable
                >
                  {Array.isArray(messages) && messages.length > 0 ? (
                    messages.map((msg: any) => (
                      <div key={msg.id} className="text-left mb-2">
                        <div className="flex items-start">
                          {msg.admin ? (
                            <Image
                              src="/greenicon.svg"
                              width={20}
                              height={20}
                              alt="Admin Logo"
                              className="mr-2"
                            />
                          ) : null}
                          <strong className="mr-2">{msg.sender}:</strong>

                          <p>{msg.message}</p>
                        </div>

                        <small>
                          {new Date(msg.timestamp).toLocaleString()}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p>No messages yet</p>
                  )}
                  <div ref={messagesEndRef}></div> {/* Scroll target */}
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
