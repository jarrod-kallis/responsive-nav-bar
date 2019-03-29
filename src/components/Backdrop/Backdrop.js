import React from 'react';

import './Backdrop.css';

const backdrop = ({ display, click }) => {
  let className = 'backdrop';
  if (display) {
    className += ' display';
  }

  return <div className={className} onClick={click} />;
};

export default backdrop;
