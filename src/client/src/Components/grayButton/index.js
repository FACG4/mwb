import React  from 'react';
import './style.css'
const GrayButton = (props) => {
    return (
        <button {...props} >{props.title}</button>
    );
}

export default GrayButton;