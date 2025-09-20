import React from "react";
import { FaEnvelope, FaPhoneAlt, FaEdit } from "react-icons/fa";

const ProfilePanel = ({ friend }) => {
  if (!friend) {
    return (
      <div className="w-[280px] hidden lg:flex flex-col border-l items-center justify-center text-gray-500">
        No friend selected
      </div>
    );
  }

  return (
    <div className="w-[280px] bg-white rounded-3xl h-full hidden lg:flex flex-col p-6">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-white font-bold">
          {friend.name.charAt(0)}
        </div>
        <h2 className="mt-4 text-lg font-semibold">{friend.name}</h2>
        <p className="text-sm text-green-500">Online</p>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-gray-500" />
          <span>{friend.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-gray-500" />
          <span>{friend.phone}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-1">Bio</h3>
          <p className="text-gray-600 text-sm">{friend.bio}</p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-auto pt-6">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          <FaEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePanel;
