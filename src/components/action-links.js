import React from 'react';

export default function ActionLinks({links}) {
  return (
    <ul className="action-links">
      {links.map(link => {
        return (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
