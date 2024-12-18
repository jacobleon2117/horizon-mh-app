import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "@/components/common/navigation/SideNav";
import TopNav from "@/components/common/navigation/TopNav";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideNav />
      <div className="flex-1 ml-64 overflow-y-auto">
        {" "}
        <TopNav />
        <main className="pt-20 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
