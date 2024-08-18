import React from "react";

interface ChatMessageData {
  id: number;
  author: string;
  message: string;
}

interface ChatMessageProps {
  author: string;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ author, message }) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-xs p-2 rounded bg-gray-500">
        <p className="text-xs text-white">{author}</p>
        <p className="text-sm text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
