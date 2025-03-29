import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const comments = [
  {
    author: "John Doe",
    initials: "JD",
    date: "05/12/2024",
    content: "This task is very urgent and must be prioritized.",
  },
  {
    author: "Jane Smith",
    initials: "JS",
    date: "04/12/2024",
    content: "We should focus on this task after the current sprint.",
  },
  {
    author: "Jane Smith",
    initials: "JS",
    date: "04/12/2024",
    content: "We should focus on this task after the current sprint.",
  },
];

export function CommentsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.content} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
              <Avatar>
                <AvatarFallback>{comment.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CommentsList;