import React from "react";
import "./index.css";
import { SidebarProvider } from "./components/layout/sidebar";
import { AppSidebar } from "./components/dashboard/app-sidebar";

const inter = {
  className: "font-inter", // Assuming you have a CSS class for the Inter font
};

const metadata = {
  title: "Task Management Dashboard",
  description: "Monitor all your project and tasks here",
};

// export default function RootLayout({ children }) {
export  function Layout({ children }) {

  React.useEffect(() => {
    document.title = metadata.title;
    document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
  }, []);

  return (
    <div lang="en">
      <div className={inter.className}>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default Layout;
