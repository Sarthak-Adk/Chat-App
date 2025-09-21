import React, { useState, useEffect } from "react";
import { PiX } from "react-icons/pi";

const Chatbot = ({ friend, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  // Simulate fetching messages for this friend
  useEffect(() => {
    if (friend) {
      const dummyMessages = [
        { id: 1, sender: friend.name, content: "Hello!" },
        { id: 2, sender: "You", content: "Hi, how are you?" },
        { id: 3, sender: friend.name, content: "I'm good, thanks!" },
      ];
      setMessages(dummyMessages);

      // Generate a summary
      const lastMsg = dummyMessages[dummyMessages.length - 1];
      setSummary(`Last message: "${lastMsg.content}" from ${lastMsg.sender}`);
    } else {
      setMessages([]);
      setSummary("");
    }
  }, [friend]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), sender: "You", content: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Update summary
    setSummary(`Last message: "${input}" from You`);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl">
      {/* Header */}
      <div className="flex justify-between items-center rounded-t-3xl p-4 bg-green-500 text-white">
        <h2 className="font-bold">{friend?.name} Chatbot</h2>
      
      </div>

      {/* Message Summary */}
      <div className="p-4 bg-white ">
        <p className="text-gray-700 text-sm">{summary || "No messages yet"}</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "You" ? "bg-green-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default Chatbot;
