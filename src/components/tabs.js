import React from 'react';
import Tab from './Tab';

export default function Tabs({tabs}) {
  return (
    <div className="tabs">
      {tabs.map(tab => {
        return <Tab key={tab.id} tab={tab} />;
      })}
    </div>
  );
}
