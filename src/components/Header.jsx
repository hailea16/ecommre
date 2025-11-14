import React from "react";
import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Moon,
  Plus,
  Search,
  Settings,
  Sun,
} from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-slate-700 text-white shadow-md flex justify-between items-center px-6 h-16">
      
      {/* Left Section: Sidebar Toggle & Brand */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-slate-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold hidden md:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-1 mx-6 hidden md:flex">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full dark:bg-white pl-10 pr-12 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-red-500 cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">

        {/* Plus Button */}
        {/* Plus Button */}
        <button className="p-2 rounded-md hover:scale-105 transition-transform bg-gradient-to-r cursor-pointer from-pink-500 to-green-500 text-white">
          <Plus className="w-5 h-5" />
        </button>


        {/* Filter Icon */}
       

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white"></span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
          <Settings className="w-5 h-5" />
        </button>

        {/* Dark/Light Mode Toggle */}
        <button className="p-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
          <Moon className="w-5 h-5"/>
        </button>

        {/* User Info with Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/image/react.jpg"
            alt="User"
            className="h-10 w-10 rounded-full object-cover border-2 border-white"
          />
          <div className="hidden md:flex items-center space-x-1">
            <span className="font-medium">Hailemichael</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
