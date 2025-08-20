"use client";

import { useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post<{ reply: string }>("/api/chat", {
        message: input,
      });
      const botMessage: Message = {
        role: "assistant",
        content: response.data.reply,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  useLayoutEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTop = container.scrollHeight;
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "auto", block: "end" });
      }
    });
  }, [messages]);

  return (
    <div className="p-4 flex flex-col h-[80vh]">
      <div
        ref={messagesContainerRef}
        className="mb-4 border p-4 rounded bg-gray-100 flex-1 min-h-0 max-h-full overflow-y-scroll scroll-smooth overscroll-contain touch-pan-y"
        style={{ WebkitOverflowScrolling: "touch", overflowAnchor: "none" }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <p
              className={`p-2 rounded ${
                msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {msg.content}
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
