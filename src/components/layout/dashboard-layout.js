import React from "react";
import { Sidebar } from "./sidebar";


function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}

export default DashboardLayout;

