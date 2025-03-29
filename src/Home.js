import { StatsCards } from "./components/dashboard/stats-cards";
import { AgendaMeetings } from "./components/dashboard/agenda-meetings";
import { UrgentTasks } from "./components/dashboard/urgent-tasks";
import { ProjectsList } from "./components/dashboard/projects-list";
import { CommentsList } from "./components/dashboard/comments-list";
import { TeamsList } from "./components/dashboard/teams-list";
// import { AppSidebar } from "./components/dashboard/app-sidebar";

export function Home() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-muted-foreground">Monitor all your project and tasks here</p>
      </div>
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-2">
        <AgendaMeetings />
        <UrgentTasks />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <ProjectsList />
          <CommentsList />
        </div>
        <TeamsList />
      </div>
    </div>
  );
}

export default Home;