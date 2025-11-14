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
  Droplet,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
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

const Sidebar = ({ currentPage, setCurrentPage, isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-20"
      } transition-all duration-300 ease-in-out bg-blue-400 dark:bg-slate-500 flex flex-col relative backdrop-blur-xl border-r border-slate-200/50 z-10 top-16`}
    >
      {/* Logo Area */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-200/50 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <Droplet className="w-6 h-6 text-green-500" />
          </div>
          {isOpen && (
            <div>
              <h2 className="text-xl font-bold  text-slate-700 dark:text-blue-800">
                Bahirdar
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-800">
                AdminPage
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2  overflow-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                setCurrentPage(item.id);
                item.submenu && toggleSubmenu(item.id);
              }}
              className={`flex items-center justify-between w-full p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                currentPage === item.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 text-slate-800 dark:text-slate-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </div>

              {item.count && isOpen && (
                <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                  {item.count}
                </span>
              )}
              {item.badge && isOpen && (
                <span className="text-xs  bg-green-500 text-white rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
              {item.submenu && isOpen && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMenu === item.id ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Submenu */}
            {item.submenu && openMenu === item.id && isOpen && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    onClick={() => setCurrentPage(subitem.id)}
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

      {/* User Info */}
      <div className="p-10 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center">
        <div className="flex items-center space-y-1 rounded-xl bg-slate-100 dark:bg-slate-600 p-2">
          <img
            src="/image/react.jpg"
            alt="user"
            className="h-10 w-10 rounded-full ring-2 ring-blue-500 object-cover"
          />
          {isOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Hailemichael Adisu
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Manager
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
