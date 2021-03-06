import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Input = props => (
  <div className="input-container">
    <FontAwesomeIcon icon={props.icon} />
    <input {...props} />
  </div>

);
export default Input;
