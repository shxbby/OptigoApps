import { Link, useLocation } from "react-router-dom";
import { Calendar, Home, Inbox, LayoutDashboard, ListTodo, Users2, Video } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Task", icon: ListTodo, href: "/tasks" },
  { title: "Project", icon: LayoutDashboard, href: "/projects" },
  { title: "Inbox", icon: Inbox, href: "/inbox" },
  { title: "Meeting", icon: Video, href: "/meetings" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "Masters", icon: Users2, href: "/masters" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 border-r bg-background">
      <div className="border-b p-4">
        <h1 className="text-xl font-bold">OptigoApps</h1>
      </div>
      <nav className="space-y-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              location.pathname === item.href ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/50"
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default AppSidebar;