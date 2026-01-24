import React from "react";
import Asidebar from "../components/Asidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-base-100 shadow-lg">
          <Asidebar />
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6">
          <Outlet />
        </section>

      </div>
    </div>
  );
};

export default DashboardLayout;
