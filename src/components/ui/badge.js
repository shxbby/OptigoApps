import React from 'react';

function Badge({ children, variant }) {
  const className = variant === 'destructive' ? 'badge-destructive' : 'badge-warning';
  return (
    <span className={`badge ${className}`}>
      {children}
    </span>
  );
}

export { Badge };