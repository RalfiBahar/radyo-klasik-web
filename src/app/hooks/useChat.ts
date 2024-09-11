import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { fetchWithAuth } from "../helpers/token";

interface Message {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
}

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/chat/chats`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMessages(data);
      } else {
        setError("Failed to fetch messages.");
      }
    } catch (err) {
      setError("Failed to fetch messages.");
    }
  };

  const sendMessage = async (message: string) => {
    try {
      const sender = Cookies.get("username");
      const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/chat/send_chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender, message }),
        }
      );

      if (response.ok) {
        fetchMessages();
      } else {
        setError("Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
  };

  return { messages, fetchMessages, sendMessage, error };
};

export default useChat;
