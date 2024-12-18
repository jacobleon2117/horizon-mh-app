import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "@/components/common/navigation/SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideNav />
      <div className="flex-1 ml-64 overflow-y-auto">
        <main className="pt-6 p-6">
          {" "}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
