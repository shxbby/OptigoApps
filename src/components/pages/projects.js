import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    status: "In Progress",
    progress: 75,
    team: [
      { name: "John Doe", initials: "JD" },
      { name: "Jane Smith", initials: "JS" },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "Planning",
    progress: 25,
    team: [
      { name: "Alice Brown", initials: "AB" },
      { name: "Bob Wilson", initials: "BW" },
    ],
  },
  {
    id: 3,
    name: "CRM System",
    status: "Review",
    progress: 90,
    team: [
      { name: "Carol White", initials: "CW" },
      { name: "Dave Black", initials: "DB" },
    ],
  },
];

export  function ProjectPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Track and manage your projects</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge>{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Team Members</h4>
                  <div className="flex -space-x-2">
                    {project.team.map((member) => (
                      <Avatar key={member.initials} className="border-2 border-background">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;