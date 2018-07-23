import React, { Component , Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import GrayButton from './Components/grayButton/';

class App extends Component {
  render() {
    return (
       <Fragment>
        <GrayButton title={'Login'} />
      </Fragment>
    );
  }
}

export default App;



