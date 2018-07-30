import React, { Component, Fragment } from 'react';
import './App.css';
import HeaderWithSideBar from './Components/HeaderWithSideBar/index';
import SignIn from './Pages/signIn';

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
