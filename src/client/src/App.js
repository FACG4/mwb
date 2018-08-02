
import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HeaderWithSideBar from './Components/HeaderWithSideBar/index';
import SignIn from './Pages/signIn';
import ErrorPage from './Pages/ErrorPage';
import Tracker from './Pages/tracker';
import SignUp from './Pages/signUp';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/tracker" component={Tracker} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
