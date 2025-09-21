import React from "react";
import { PiX } from "react-icons/pi";

const ProfilePanel = ({ friend, onClose }) => {
  if (!friend) return null;

  return (
    <div className="flex flex-col h-full bg-white ">
      {/* Header with close button */}
      <div className="flex justify-between items-center p-4 bg-green-500 text-white">
        <h2 className="font-bold">{friend.name} Profile</h2>
        <button
          onClick={onClose}
          className="text-xl hover:text-gray-200"
        >
          <PiX />
        </button>
      </div>

      {/* Profile Details */}
      <div className="p-4 flex flex-col gap-2">
        <div>
          <strong>Email:</strong> {friend.email}
        </div>
        <div>
          <strong>Phone:</strong> {friend.phone}
        </div>
        <div>
          <strong>Bio:</strong> {friend.bio}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
