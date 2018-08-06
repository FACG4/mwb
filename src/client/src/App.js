/*eslint-disable*/

import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HeaderWithSideBar from './Components/HeaderWithSideBar/index';
import SignIn from './Pages/signIn';
import signUp from './Pages/signUp/index';
import homePage from './Pages/homePage/index';
import ItemCard from './Components/ItemCard/index';
import ErrorPage from './Pages/ErrorPage';
import Tracker from './Pages/tracker/index';
import OrdersPage from './Pages/OrdersPage/index';
import DetaildOrderCard from './Components/DetaildOrderCard';
import ItemPage from './Pages/ItemPage';

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
          <Route exact path="/tracker/:order_id_for_tracking" component={Tracker} />
          <Route exact path="/order/:order_id_to_render" component={DetaildOrderCard} />
          <Route exact path="/items" component={ItemPage} />


          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
