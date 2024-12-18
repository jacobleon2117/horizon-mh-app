import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Video,
  Settings,
  User,
  LogOut,
  BarChart,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const SideNav = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: Calendar,
      label: "Schedule",
      path: "/dashboard/schedule",
    },
    {
      icon: Video,
      label: "E-Visit",
      path: "/dashboard/e-visit",
    },
    {
      icon: FileText,
      label: "Journals",
      path: "/dashboard/journals",
    },
    {
      icon: BarChart,
      label: "Reports",
      path: "/dashboard/reports",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  const isActivePath = (path) => {
    if (path === "/dashboard") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col">
      <div className="h-16 border-b border-gray-200 flex items-center px-6">
        <Link to="/" className="text-xl font-bold text-[rgb(26,55,91)]">
          HORIZON
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActivePath(item.path)
                  ? "bg-[rgb(26,55,91)] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-4 py-3">
          <User size={20} className="text-gray-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500">{user?.email || ""}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
