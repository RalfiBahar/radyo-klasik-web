import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

interface ChatMessageData {
  id: number;
  author: string;
  message: string;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const [nameForm, setNameForm] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: "", lastName: "" });
  const [messages, setMessages] = useState<ChatMessageData[]>([
    { id: 1, author: "Alice", message: "Hello, how are you?" },
    { id: 2, author: "User", message: "I'm fine, thanks for asking!" },
    { id: 3, author: "Alice", message: "What are you up to today?" },
  ]);
  const [warning, setWarning] = useState<string>("");

  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameForm.firstName && nameForm.lastName) {
      setUser({ firstName: nameForm.firstName, lastName: nameForm.lastName });
      setWarning("");
    } else {
      setWarning("Please input both first and last name.");
    }
  };

  const handleMessageSubmit = (message: string) => {
    if (!user || !message.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      author: `${user.firstName} ${user.lastName}`,
      message: message,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div
      className={`transform bottom-24 right-0 w-1/3 bg-yellow-50 rounded-lg fixed h-1/2 overflow-hidden transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-black">
        Close
      </button>
      {!user ? (
        <form onSubmit={handleNameSubmit} className="p-4 flex flex-col">
          <input
            type="text"
            placeholder="First Name"
            value={nameForm.firstName}
            onChange={(e) =>
              setNameForm({ ...nameForm, firstName: e.target.value })
            }
            className="m-2 w-36 p-4 rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={nameForm.lastName}
            onChange={(e) =>
              setNameForm({ ...nameForm, lastName: e.target.value })
            }
            className="m-2 w-36 p-4 rounded-lg"
          />
          <div className="m-2 p-4 bg-green-300 w-32 h-18 rounded-xl text-center">
            <button type="submit">Submit</button>
          </div>
          {warning ? <p className="text-red-400 m-2">{warning}</p> : null}
        </form>
      ) : (
        <div className="flex flex-col h-full">
          <div className="overflow-auto p-4 space-y-2 flex-grow">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                author={msg.author}
                message={msg.message}
              />
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleMessageSubmit((e.target as any)[0].value); // Simplistic handling, needs refining
              (e.target as any)[0].value = ""; // Clear the input after sending
            }}
            className="p-4 bg-gray-100"
          >
            <input
              type="text"
              placeholder="Type your message here"
              className="w-full p-2 rounded-lg"
            />
            <button
              type="submit"
              className="w-full mt-2 py-2 bg-blue-500 text-white rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatPanel;
