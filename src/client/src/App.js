import React, { Component , Fragment} from 'react';

import logo from './logo.svg';
import './App.css';


import SignIn from './Pages/signIn/';
import SignUp from './Pages/signUp';



class App extends Component {
  render() {
    return (
       <Fragment>
        {/* <SignIn /> */}
        <SignUp />
      </Fragment>
    );
  }
}

export default App;



