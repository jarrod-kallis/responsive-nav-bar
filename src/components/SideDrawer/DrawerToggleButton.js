import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
