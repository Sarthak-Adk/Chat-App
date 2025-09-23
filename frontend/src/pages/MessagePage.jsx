import React, { useState, useEffect } from "react";
import ChatList from "../components/ChatList";
import ChatSection from "../components/ChatSection";
import Chatbot from "../components/Chatbot";
import ProfilePanel from "../components/ProfilePanel";

const dummyFriends = [
  { id: "user2", name: "Alice", email: "alice@gmail.com", phone: "9800000002", bio: "Loves hiking." },
  { id: "user3", name: "Bob", email: "bob@gmail.com", phone: "9800000003", bio: "Tech enthusiast." },
  { id: "user4", name: "Charlie", email: "charlie@gmail.com", phone: "9800000004", bio: "Frontend developer." },
];

const MessagePage = () => {
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [friends, setFriends] = useState([]);
  const [showProfile, setShowProfile] = useState(false); // for profile panel

  useEffect(() => {
    setFriends(dummyFriends);
  }, []);

  const selectedFriend = friends.find((f) => f.id === selectedFriendId);

  return (
    <div className="flex h-screen gap-2 w-full relative">
      {/* Left: Chat list */}
      <ChatList
        selectedFriendId={selectedFriendId}
        onSelectFriend={(id) => {
          setSelectedFriendId(id);
          setShowProfile(false); // close profile when switching friends
        }}
        friends={friends}
      />

      {/* Center: Chat section */}
      <ChatSection
        selectedFriend={selectedFriend}
        selectedFriendId={selectedFriendId}
        onAvatarClick={() => setShowProfile(true)} // open profile
      />

      {/* Right: Chatbot panel (always visible) */}
      <div className="w-[300px] h-full ">
        <Chatbot friend={selectedFriend} />
      </div>

      {/* Profile panel (conditionally visible) */}
    {showProfile && selectedFriend && (
  <div className="absolute right-[800px] top-19 w-[300px] h-auto rounded-2xl z-20 shadow-lg bg-white ">
    <ProfilePanel friend={selectedFriend} onClose={() => setShowProfile(false)} />
  </div>
)}

    </div>
  );
};

export default MessagePage;
