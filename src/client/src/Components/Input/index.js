import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Input = (props) => {
    
    return (
        <div className="input-container">     
            <FontAwesomeIcon icon={props.icon} />
            <input placeholder={props.placeholder} name={props.name} value={props.value} type={props.type} />
        </div>

    )
}
export default Input;
