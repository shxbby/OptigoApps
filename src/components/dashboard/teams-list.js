import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const team = [
  {
    name: "John Doe",
    initials: "JD",
    role: "Frontend Developer",
  },
  {
    name: "Jane Smith",
    initials: "JS",
    role: "Backend Developer",
  },
  
];

export function TeamsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Teams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {team.map((member) => (
            <div key={member.name} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
              <Avatar>
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-muted-foreground">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamsList;