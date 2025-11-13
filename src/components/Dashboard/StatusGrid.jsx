import React from "react";
import { ArrowRight, Eye, ShoppingCart, Users, DollarSign } from "lucide-react";

const Status = [
  {
    title: "Total Revenue",
    value: "$20,000,003",
    change: "+12.34%",
    trend: "up",
    icon: DollarSign,
    progressColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
  },
  {
    title: "Active Users",
    value: "5,697,708",
    change: "+345%",
    trend: "up",
    icon: Users,
    progressColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    title: "Total Orders",
    value: "3,860,800",
    change: "+15.34%",
    trend: "up",
    icon: ShoppingCart,
    progressColor: "bg-gradient-to-r from-purple-500 to-pink-600",
  },
  {
    title: "Page Views",
    value: "20,000,003",
    change: "-12.34%",
    trend: "down",
    icon: Eye,
    progressColor: "bg-gradient-to-r from-orange-500 to-red-600",
  },
];

const StatusGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {Status.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-xl p-6 
                       border border-slate-200/50 dark:border-slate-700/50 
                       hover:shadow-xl transition-all duration-300 group"
          >
            {/* Header Section */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium dark:text-slate-400 mb-2 text-slate-600">
                  {item.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {item.value}
                </p>
                <div className="flex items-center space-x-2">
                  <ArrowRight
                    className={`w-5 h-5 ${
                      item.trend === "down"
                        ? "rotate-180 text-red-500"
                        : "text-emerald-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      item.trend === "down"
                        ? "text-red-600"
                        : "text-emerald-600"
                    }`}
                  >
                    {item.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs last month
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`p-3 rounded-xl ${item.progressColor} text-white 
                           group-hover:scale-110 transition-all duration-200`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="mt-4 h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
              <div
                className={`w-full h-2 rounded-full ${item.progressColor} transition-all duration-300`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusGrid;
