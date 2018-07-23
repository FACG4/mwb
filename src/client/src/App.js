import React, { Component , Fragment} from 'react';

import logo from './logo.svg';
import './App.css';


import SignIn from './Pages/signIn/';


class App extends Component {
  render() {
    return (
       <Fragment>
        <SignIn />
      </Fragment>
    );
  }
}

export default App;



