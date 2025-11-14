import React from "react";
import StatusGrid from "./StatusGrid";
import ChartSection from "./ChartSection";
import TableSection from "./TableSection";
const Dashboard = () => {
  return (
    <div className="flex flex-col  space-y-4">
      <h2 className="text-2xl font-bold text-purple-800">Dashboard</h2>
      <p className="text-blue-600">
        Welcome to your admin dashboard! Here you can view analytics, manage
        users, and monitor activity.
      </p>
      <StatusGrid/>
      <ChartSection/>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
       <div className="xl:col-span-2">
      <TableSection/>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
