import React from "react";
import { Box, CircleDot, Clock, Users } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const stats = [
  {
    title: "Services Tasks",
    value: "15",
    icon: Box,
    color: "blue",
  },
  {
    title: "R&D Tasks",
    value: "24",
    icon: CircleDot,
    color: "green",
  },
  {
    title: "UpComming Tasks",
    value: "80",
    icon: Users,
    color: "orange",
  },
  {
    title: "Unassigned Tasks",
    value: "63",
    icon: Users,
    color: "red",
  },
  {
    title: "Maintenance Tasks",
    value: "14",
    icon: Box,
    color: "cyan",
  },
  {
    title: "Due",
    value: "10",
    icon: Clock,
    color: "purple",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-6">
      {stats.map((stat, index) => (
        <div key={stat.title} className="card" style={{ animationDelay: `${index * 0.05}s` }}>
          <div className="card-content">
            <div className="stats-card-header">
              <div className="stats-card-title">{stat.title}</div>
              <div className={`stats-card-icon ${stat.color}`}>
                <stat.icon />
              </div>
            </div>
            <div className="stats-card-value">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards;