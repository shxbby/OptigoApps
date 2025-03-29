import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const tasks = [
  {
    title: "Urgent Task for Project Alpha",
    priority: "High",
  },
  {
    title: "Fix Critical Bug in Project Beta",
    priority: "High",
  },
  {
    title: "Prepare Report for Project Gamma",
    priority: "Medium",
  },
  {
    title: "Review Code for Project Delta",
    priority: "Medium",
  },
];

export function UrgentTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Urgent Task</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.title} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <span className="font-medium">{task.title}</span>
              <Badge variant={task.priority === "High" ? "destructive" : "secondary"} className="capitalize">
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default UrgentTasks;