<<<<<<< HEAD
import React, { Component, Fragment } from 'react';

=======
import React, { Component } from 'react';
>>>>>>> 9282e70afe7d89313945fb9a43f5623ef6e090b0
import './App.css';
import HeaderWithSideBar from './Components/HeaderWithSideBar/index';



import SignIn from './Pages/signIn';

class App extends Component {
  render() {
<<<<<<< HEAD
    return (
       <Fragment>
         <SignIn />
      </Fragment>
=======
    return (<div>


      <HeaderWithSideBar title="Home" />
    </div>
>>>>>>> 9282e70afe7d89313945fb9a43f5623ef6e090b0
    );
  }
}

export default App;
