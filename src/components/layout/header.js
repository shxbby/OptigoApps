import React from 'react';

function Header({ title, subtitle }) {
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export default Header;

