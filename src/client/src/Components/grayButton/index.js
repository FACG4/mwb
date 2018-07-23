import React  from 'react';
import './style.css'
const GrayButton = (props) => {
    return (
        <button onClick={props.event}>{props.title}</button>
    );
}

export default GrayButton;