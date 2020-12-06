import React from 'react';

export const Heading = ({ level, children }) => {
  switch (level) {
    case 'h1':
      return <h1>{children}</h1>
    case 'h2':
      return <h2>{children}</h2>
    case 'h3':
      return <h3>{children}</h3>
    case 'h4':
      return <h4>{children}</h4>
    default:
      return children
  }
}