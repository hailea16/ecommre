import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { month: "Jan", revenue: 4500, expense: 3200 },
    { month: "Feb", revenue: 5200, expense: 2900 },
    { month: "Mar", revenue: 6100, expense: 3500 },
    { month: "Apr", revenue: 5800, expense: 3700 },
    { month: "May", revenue: 7200, expense: 4100 },
    { month: "Jun", revenue: 6900, expense: 4200 },
    { month: "Jul", revenue: 8100, expense: 4600 },
    { month: "Aug", revenue: 7800, expense: 4700 },
    { month: "Sep", revenue: 8500, expense: 5200 },
    { month: "Oct", revenue: 9300, expense: 5500 },
    { month: "Nov", revenue: 8700, expense: 4900 },
    { month: "Dec", revenue: 9600, expense: 5800 },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-400/50 backdrop-blur-2xl border rounded-2xl border-slate-200/50 dark:border-slate-700/50 p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-purple-800 dark:text-purple-400">
            Revenue Chart
          </h3>
          <p className="text-sm text-blue-500 dark:text-purple-900">
            Monthly Revenue and Expenses
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expense
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" tick={{ fill: "#d9004c" }} />
            <YAxis tick={{ fill: "#00009c" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
            />
            {/* Revenue in Green */}
            <Bar
              dataKey="revenue"
              fill="#0000ff"
              radius={[6, 6, 0, 0]}
              barSize={20}
            />
            {/* Expense in Red */}
            <Bar
              dataKey="expense"
              fill="#3cd070"
              radius={[6, 6, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
