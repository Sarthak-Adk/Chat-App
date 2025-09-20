import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

export default function Navbar() {
  const navLinks = [
    { icon: <MdDashboard />, to: "/dashboard" },
    { icon: <BiSolidMessageRoundedDots />, to: "/messages" },
    { icon: <IoSettingsSharp />, to: "/settings" },
  ];

  return (
    <>  
      <div className="flex flex-col gap-4 p-4 w-[100px] items-center
    bg-white rounded-3xl pt-12">

      {navLinks.map((item, index) => (
        <Link key={index} to={item.to} className="text-2xl hover:text-blue-500">
          {item.icon}
        </Link>
      ))}

    </div>
    </>
  );
}
