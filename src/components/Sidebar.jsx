import React, { useState } from "react";
import {
  Zap,
  BarChart3,
  Calendar,
  CreditCard,
  Package,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
  FileText,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permission" },
      { id: "activity", label: "Users Activity" },
    ],
  },
  {
    id: "commerce",
    icon: ShoppingBag,
    label: "Commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
    
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
     
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="w-72 transition duration-300 ease-in-out bg-blue-400 dark:bg-slate-200 flex flex-col relative backdrop-blur-xl border-r border-slate-200/50 z-10">
      {/* ---- Logo Area ---- */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-700 dark:text-black">
              Bahirdar
            </h2>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-800">
              AdminPage
            </p>
          </div>
        </div>
      </div>

      {/* ---- Menu Section ---- */}
      <nav className="flex-1 p-4 space-y-2 overflow-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => item.submenu && toggleSubmenu(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                item.active
              
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500/20 text-slate-800 dark:text-slate-700 cursor-pointer"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-2">
                {item.count && (
                  <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className="text-xs bg-green-500 text-white rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
            </button>

            {/* ---- Submenu ---- */}
            {item.submenu && openMenu === item.id && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-blue-500/10 text-slate-700 dark:text-slate-800"
                  >
                    {subitem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* ---- User Info ---- */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 rounded-xl bg-slate-100 dark:bg-slate-600 p-2">
          <img
            src="/image/react.jpg"
            alt="user"
            className="h-10 w-10 rounded-full ring-2 ring-blue-500 object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Hailemichael Adisu
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
