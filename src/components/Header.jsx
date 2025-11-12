import React from "react";
import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 left-55 w-264 bg-slate-50 px-6 py-6 backdrop-blur-xl border-b border-slate-200 dark:bg-slate-200 z-50">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-sm opacity-80 text-slate-700">
              Welcome Haile — here’s what’s happening today.
            </p>
          </div>
        </div>

        {/* Middle: Search bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl 
              dark:border-slate-700 dark:bg-slate-300 text-slate-800 bg-slate-100 
              focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all 
              placeholder-slate-400"/>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-blue-600 transition-colors">
              <Filter />
            </button>
          </div>
        </div>

        {/* Right: New button */}
        <div className="flex items-center">
          <button
            className="flex items-center space-x-2 py-2 px-2 
            bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 
            text-white rounded-xl shadow-md hover:shadow-lg 
            hover:opacity-90 transition-all duration-300 cursor-pointer">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </button>
          <button className="p-2.5 rounded-xl dark:bg-slate-100 hover:bg-slate-300 dark:hover:bg-slate-100 transition-colors text-slate-600 ">
            <Sun className="w-5 h-5"/>
          </button>
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-600 hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5"/>
          
             <span className="absolute -top-1 w-4 h-4 bg-red-500 text-white text-x5 rounded-full flex items-center justify-center"></span>
          </button>
          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-600 hover:bg-slate-800 transition-colors">
            <Settings className="w-4 h-5"/>
          </button>
          {/*  user profile */}
          <div className="flex items-center 
           border-slate-200 dark:border-0 space-x-3 pl-3 border-l  dark:border-slate-700">
            <img src="image/bird.png" alt="user" className="w-8 h-8 rounded-full ring-2 ring-blue-500"/>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500
               dark:text-slate-800"> Hailemichael Adisu</p>
               <p className="text-xs text-slate-500 dark:text-slate-700">Developer</p>

            </div>
            <ChevronDown className="w-4 h-5 text-slate-400"/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
