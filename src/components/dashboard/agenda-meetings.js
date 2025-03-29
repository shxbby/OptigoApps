import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"; // Corrected import path

const meetings = [
  {
    title: "Complete Project Alpha Report",
    date: "08/12/2024",
  },
  {
    title: "Design User Interface for Project Beta",
    date: "09/12/2024",
  },
  {
    title: "Review Project Gamma Progress",
    date: "10/12/2024",
  },
];

export function AgendaMeetings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agenda/Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div
              key={meeting.title}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <span className="font-medium">{meeting.title}</span>
              <span className="text-sm text-muted-foreground">{meeting.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default  AgendaMeetings;