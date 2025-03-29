import React from 'react';
import { Box, Calendar, Inbox, LayoutDashboard, ListTodo, Settings, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const navigationItems = [
  { name: "Home", icon: LayoutDashboard, href: "/", active: true },
  { name: "Task", icon: ListTodo, href: "/tasks" },
  { name: "Project", icon: Box, href: "/projects" },
  { name: "Inbox", icon: Inbox, href: "/inbox" },
  { name: "Meeting", icon: Users, href: "/meetings" },
  { name: "Calendar", icon: Calendar, href: "/calendar" },
  { name: "Masters", icon: Settings, href: "/masters" },
];

export function SidebarProvider() {
  return (
    <div className="w-64 border-r bg-background p-6">
      <div className="flex items-center gap-2 pb-6">
        <Box className="h-6 w-6 text-primary" />
        <span className="text-xl font-semibold">OptigoApps</span>
      </div>
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 hover:bg-muted ${
              item.active ? "bg-primary/10 text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SidebarProvider;