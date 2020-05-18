import React from 'react';
import icon from '@/assets/icons/italic.svg';
import './Brief.css';

const Brief = () => {
  return (
    <div id="m-brief">
      <a>@Yuan</a>
      &ensp;
      <img src={icon} alt="/" />
      &ensp;
      <span>20,04,25</span>
    </div>
  );
};

export default Brief;
