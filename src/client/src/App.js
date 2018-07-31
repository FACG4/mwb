import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Tracker from './Pages/tracker';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import ErrorPage from './Pages/ErrorPage';

class App extends Component {
  state={}

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
