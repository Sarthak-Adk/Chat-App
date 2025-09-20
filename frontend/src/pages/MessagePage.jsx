import React, { useState, useEffect } from "react";
import ChatList from "../components/ChatList";
import ChatSection from "../components/ChatSection";
import ProfilePanel from "../components/ProfilePanel";

const dummyFriends = [
  { id: "user2", name: "Alice", email: "alice@gmail.com", phone: "9800000002", bio: "Loves hiking." },
  { id: "user3", name: "Bob", email: "bob@gmail.com", phone: "9800000003", bio: "Tech enthusiast." },
  { id: "user4", name: "Charlie", email: "charlie@gmail.com", phone: "9800000004", bio: "Frontend developer." },
];

const MessagePage = () => {
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(dummyFriends); // simulate fetching from backend
  }, []);

  const selectedFriend = friends.find((f) => f.id === selectedFriendId);

  return (
    <div className="flex h-screen gap-2 w-full">
      <ChatList
        selectedFriendId={selectedFriendId}
        onSelectFriend={setSelectedFriendId}
        friends={friends}
      />
      <ChatSection selectedFriendId={selectedFriendId}  selectedFriend={selectedFriend}  />
      <ProfilePanel friend={selectedFriend} />
    </div>
  );
};

export default MessagePage;
