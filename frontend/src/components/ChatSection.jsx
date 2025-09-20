import React, { useEffect, useRef, useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { MdEmojiEmotions } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const dummyMessagesMap = {
  user2: [
    { id: 1, sender: "user2", content: "Hey!" },
    { id: 2, sender: "user1", content: "Hi Alice!" },
    { id: 3, sender: "user2", content: "How are you" },
    { id: 4, sender: "user1", content: "I am good, What are you doing ?" },
  ],
  user3: [
    { id: 3, sender: "user3", content: "Yo!" },
    { id: 4, sender: "user1", content: "Hey Bob!" },
  ],
};

const ChatSection = ({ selectedFriend }) => {
  const userId = "user1";
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedFriend?.id) {
      setMessages(dummyMessagesMap[selectedFriend.id] || []);
    } else {
      setMessages([]);
    }
  }, [selectedFriend]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: userId,
      content: input,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col bg-white rounded-3xl">
      {/* Header */}
      {selectedFriend && (
        <div className="px-6 py-4 flex items-center justify-between bg-white shadow-md rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
              {selectedFriend.name.charAt(0)}
            </div>
            <p className="font-semibold text-lg">{selectedFriend.name}</p>
          </div>
          <div className="flex gap-6 text-[#08CB00] text-lg">
            <FontAwesomeIcon icon={faPhone} className="cursor-pointer" />
            <FontAwesomeIcon icon={faVideo} className="cursor-pointer" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
          </div>
        </div>
      )}

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {selectedFriend ? (
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`my-2 flex ${
                  msg.sender === userId ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs ${
                    msg.sender === userId
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>

      {/* Message input */}
      {selectedFriend && (
        <div className="p-4 flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full py-3 pl-10 pr-10 rounded-full outline-none text-base bg-gray-200 placeholder-gray-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-700 hover:text-gray-900"
            >
              <MdEmojiEmotions />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-base text-gray-700 hover:text-gray-900"
            >
              <FiPaperclip />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="p-3 text-white bg-[#08CB00] rounded-full hover:bg-[#187809] transition duration-200"
          >
            <PiPaperPlaneRightFill className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
