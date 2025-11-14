import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothes", value: 60, color: "#8b5cf6" },
  { name: "Books", value: 30, color: "#10b981" },
  { name: "Others", value: 15, color: "#f59e0b" },
  { name: "Foods", value: 90, color: "#4e56f5" }, // FIXED HEX
];

const SalesChart = () => {
  return (
    <div className="bg-white dark:bg-slate-200 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-green-500">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-blue-900">
          Sales By Category
        </h3>
        <p className="text-sm text-slate-300 dark:text-black">
          Production Distribution
        </p>
      </div>

      {/* Pie Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              dataKey="value"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-slate-700 dark:text-black text-sm">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-slate-800 dark:text-blue-900">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
