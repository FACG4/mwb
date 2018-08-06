/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HeaderWithSideBar from './Components/HeaderWithSideBar/index';
import SignIn from './Pages/signIn';
import signUp from './Pages/signUp/index';
import homePage from './Pages/homePage/index';

import ErrorPage from './Pages/ErrorPage';
import Tracker from './Pages/tracker/index';
import OrdersPage from './Pages/OrdersPage/index';
import DetaildOrderCard from './Components/DetaildOrderCard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/" component={homePage} exact />
          <Route path="/signup" component={signUp} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/order/:order_id_to_render" component={DetaildOrderCard} />


          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
