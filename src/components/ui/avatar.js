import React from 'react';

function Avatar({ children }) {
  return (
    <div className="avatar">
      {children}
    </div>
  );
}

function AvatarFallback({ children }) {
  return (
    <div className="avatar-fallback">
      {children}
    </div>
  );
}

export { Avatar, AvatarFallback };