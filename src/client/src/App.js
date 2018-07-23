import React, { Component , Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/signUp/';

class App extends Component {
  render() {
    return (
       <Fragment>
        <SignUp />
      </Fragment>
    );
  }
}

export default App;



