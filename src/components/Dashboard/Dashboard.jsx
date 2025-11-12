import React from "react";
import StatusGrid from "./StatusGrid";

const Dashboard = () => {
  return (
    <div className="flex flex-col  space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">Dashboard</h2>
      <p className="text-gray-600">
        Welcome to your admin dashboard! Here you can view analytics, manage
        users, and monitor activity.
      </p>
      <StatusGrid/>
    </div>
  );
};

export default Dashboard;
