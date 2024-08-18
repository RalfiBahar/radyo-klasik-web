import React from "react";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`transform bottom-0 right-0 w-1/3 bg-black fixed h-1/2 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-5 right-5">
        Close
      </button>
      {/* Chat messages or content goes here */}
    </div>
  );
};

export default ChatPanel;
