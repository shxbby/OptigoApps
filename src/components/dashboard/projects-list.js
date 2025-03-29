import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = [
  {
    name: "Project Alpha",
    team: [
      { name: "John Doe", initials: "JD" },
      { name: "Jane Smith", initials: "JS" },
    ],
  },
  {
    name: "Project Beta",
    team: [
      { name: "Alice Brown", initials: "AB" },
      { name: "David Evans", initials: "DE" },
    ],
  },
  {
    name: "Project Gamma",
    team: [
      { name: "Chris Smith", initials: "CS" },
      { name: "Sarah Wilson", initials: "SW" },
    ],
  },
];

export function ProjectsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <span className="font-medium">{project.name}</span>
              <div className="flex -space-x-2">
                {project.team.map((member) => (
                  <Avatar key={member.initials} className="border-2 border-background">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectsList;