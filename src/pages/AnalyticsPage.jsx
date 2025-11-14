import React from "react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

export const AnalyticsPage = () => {
  const areaData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 14000 },
    { month: "Apr", revenue: 17000 },
    { month: "May", revenue: 19000 },
    { month: "Jun", revenue: 22000 },
  ];

  const barData = areaData.map((d) => ({ name: d.month, revenue: d.revenue / 1000 }));

  const pieData = [
    { name: "Electronics", value: 400 },
    { name: "Apparel", value: 300 },
    { name: "Accessories", value: 300 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 p-4 bg-white rounded-2xl shadow-sm">
          <h3 className="font-bold mb-4">Trend</h3>
          <div style={{ height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={areaData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow-sm">
          <h3 className="font-bold mb-4">Category Split</h3>
          <div style={{ height: 220 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={40} outerRadius={70}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-2xl shadow-sm">
        <h3 className="font-bold mb-4">Monthly Breakdown</h3>
        <div style={{ height: 220 }}>
          <ResponsiveContainer>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
