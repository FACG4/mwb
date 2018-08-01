import React from 'react';
import './style.css';

const GrayButton = props => (
  <button {...props}>
    {props.title}
  </button>
);

export default GrayButton;
