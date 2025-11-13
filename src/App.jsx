import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // track sidebar state

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isOpen={isSidebarOpen}
        />

        {/* Main Content */}
     <main className="flex-1 overflow-y-auto bg-gray-50 pt-16">
    
        <div className="p-6">
          
        {currentPage === "dashboard" && <Dashboard />}
         {currentPage !== "dashboard" && (
      <div className="text-gray-600 text-lg font-semibold">
        {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page
      </div>
    )}
    {/* Image */}
    
  </div>
</main>

      </div>
    </div>
  );
}

export default App;
