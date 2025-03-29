import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

const meetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    date: "2024-02-26",
    time: "10:00 AM",
    duration: "1 hour",
    attendees: [
      { name: "John Doe", initials: "JD" },
      { name: "Jane Smith", initials: "JS" },
    ],
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Project Review",
    date: "2024-02-26",
    time: "2:00 PM",
    duration: "45 mins",
    attendees: [
      { name: "Alice Brown", initials: "AB" },
      { name: "Bob Wilson", initials: "BW" },
    ],
    status: "In Progress",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "2024-02-27",
    time: "11:00 AM",
    duration: "2 hours",
    attendees: [
      { name: "Carol White", initials: "CW" },
      { name: "Dave Black", initials: "DB" },
    ],
    status: "Scheduled",
  },
];

export  function MeetingPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Meetings</h1>
        <p className="text-muted-foreground">Schedule and manage your meetings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <Card key={meeting.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{meeting.title}</CardTitle>
                <Badge>{meeting.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{meeting.duration}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Attendees</span>
                  </div>
                  <div className="flex -space-x-2">
                    {meeting.attendees.map((attendee) => (
                      <Avatar key={attendee.initials} className="border-2 border-background">
                        <AvatarFallback>{attendee.initials}</AvatarFallback>
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

export default MeetingPage;
