import React from "react";
import { FaHome, FaMapMarkerAlt, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden md:flex bg-[#1F1F2E] min-h-screen w-16 flex-col items-center justify-start py-6 gap-8 rounded-xl">
      <FaHome size={24} className="text-white hover:text-blue-400 cursor-pointer" />
      <FaMapMarkerAlt size={24} className="text-white hover:text-blue-400 cursor-pointer" />
      <FaCog size={24} className="text-white hover:text-blue-400 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
