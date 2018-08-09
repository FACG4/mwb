/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const Popup = ({
  icon,
  tittle,
  message,
  linkText,
  color,
  isVisible,
  onClick
}) => (
  <div className={`popup${isVisible ? ' visible' : ''}`}>
    <div className="box--popup">
      <h3>{tittle}</h3>
      <FontAwesomeIcon icon={icon} className={color} />
      <p>{message}</p>
      <div className="button--popup">
        <a onClick={onClick}>{linkText}</a>
      </div>
    </div>
  </div>
);
export default Popup;
