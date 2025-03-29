import React from 'react';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return (
    <div className="card-content">
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return (
    <div className="card-header">
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return (
    <h2 className="card-title">
      {children}
    </h2>
  );
}

export { Card, CardContent, CardHeader, CardTitle };