import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";

const ChatList = ({ friends, selectedFriendId, onSelectFriend }) => {
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[300px] h-full bg-white rounded-3xl overflow-y-auto">
      <div className="p-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-bold text-xl">Chats</h1>
          <div className="flex gap-3 text-lg">
            <FiEdit />
            <IoFilter />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border rounded-lg px-4 py-2 focus-within:ring-1 ring-gray-300">
   <SlMagnifier/>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      {/* Friend List */}
      <div className="mt-2">
        {filteredFriends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => onSelectFriend(friend.id)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 hover:rounded-4xl  ${
              selectedFriendId === friend.id ? "bg-gray-200 rounded-4xl" : "shadow-2xs"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
              {friend.name.charAt(0)}
            </div>
            <span className="font-medium">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
