import React from 'react';
import './index.css';

class DateInput extends React.Component{
  constructor(props){
    super(props);}

render(){
  return <input type="date" className={`DateInput ${this.props.visible ? 'visible' : ''}`} onChange={this.props.onChange}/>}
}

export default DateInput;
