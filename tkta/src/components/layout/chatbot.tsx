"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "../ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

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

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {open && (
        <Card className="w-80 h-96 mb-4 shadow-lg rounded-xl overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Chatbot</h3>
              <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="mb-4 border p-4 rounded bg-gray-100 h-64">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 ${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`p-2 rounded ${
                      msg.role === "user"
                        ? "bg-textPrimary text-white"
                        : "border border-solid"
                    }`}
                  >
                    {msg.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex">
              <Input
                type="text"
                className="flex-1 border rounded px-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Sualınızı daxil edin"
              />
              <button
                onClick={sendMessage}
                className="ml-2 p-2 flex items-center justify-center bg-textPrimary text-white rounded"
              >
                <Send width={20} height={20} />
              </button>
            </div>
          </div>
        </Card>
      )}

      <button
        className="w-14 h-14 bg-textPrimary text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
