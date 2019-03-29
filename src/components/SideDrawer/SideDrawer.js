import React from 'react';

import './SideDrawer.css';

const sideDrawer = ({ open }) => {
  let sideDrawerClass = 'side-drawer';
  if (open) {
    sideDrawerClass += ' open';
  }

  return (
    <nav className={sideDrawerClass}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
