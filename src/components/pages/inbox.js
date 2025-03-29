import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    initials: "JD",
    subject: "Project Update Meeting",
    preview: "Hi team, I'd like to schedule a meeting to discuss...",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    initials: "JS",
    subject: "Design Review",
    preview: "Please review the latest design changes and provide...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    sender: "Alice Brown",
    initials: "AB",
    subject: "Bug Report",
    preview: "I found a critical bug in the login system...",
    time: "2 days ago",
    unread: true,
  },
];

export  function InboxPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <p className="text-muted-foreground">Manage your messages and notifications</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                <Avatar>
                  <AvatarFallback>{message.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{message.sender}</span>
                      {message.unread && <Badge variant="secondary">New</Badge>}
                    </div>
                    <span className="text-sm text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="font-medium">{message.subject}</p>
                  <p className="text-sm text-muted-foreground">{message.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InboxPage;