import React from "react";
import { PiX } from "react-icons/pi";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ProfilePanel = ({ friend, onClose }) => {
  if (!friend) return null;
  const [learningMode, setLearningMode] = useState(false);
  return (
    <div className="flex flex-col h-full   ">
      {/* Header with close button */}
      <div className="flex justify-between items-center p-4 bg-gray-500 text-white rounded-t-2xl">
        <h2 className="font-bold">{friend.name} Profile</h2>
       
       <div>
        <button
          onClick={onClose}
          className="text-xl hover:text-red-900 cursor-pointer text-red-600"
        >
          <PiX />
        </button>
        </div>
      </div>

<div className="flex justify-between p-4">
  <h2>ChatBot</h2>
    <Switch
              checked={learningMode}
              onChange={setLearningMode}
              className={`${
                learningMode ? "bg-green-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  learningMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
</div>

      {/* Profile Details */}

      <div className="p-4 flex flex-col gap-2 ">
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
