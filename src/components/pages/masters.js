import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

const team = [
  {
    id: 1,
    name: "John Doe",
    initials: "JD",
    role: "Project Manager",
    department: "Management",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    initials: "JS",
    role: "Senior Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Brown",
    initials: "AB",
    role: "UI Designer",
    department: "Design",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Bob Wilson",
    initials: "BW",
    role: "Backend Developer",
    department: "Engineering",
    status: "Active",
  },
];

export  function MastersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Team Masters</h1>
        <p className="text-muted-foreground">Manage team members and roles</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <div key={member.id} className="flex items-center gap-4 rounded-lg border p-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{member.name}</h3>
                    <Badge variant={member.status === "Active" ? "default" : "secondary"}>{member.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MastersPage;