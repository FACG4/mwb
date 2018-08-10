/*eslint-disable*/
import React from 'react';
import './index.css';
import shoppingBag from './images/shoppingBag.png';
import hierarchy from './images/hierarchy.svg';
import HeaderWithSideBar from '../../Components/HeaderWithSideBar/index.js';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.openOrders = this.openOrders.bind(this);
    console.log(props);
  }

  openOrders() {
    window.location = 'orders';
  }

  openItems() {
    window.location = 'items';
  }

  render() {
    return (
      <div>
        <HeaderWithSideBar title="Home" />

        <div className="categoriesDiv">
          <h1 className="usernameInHomePage">
            Hey Maxx
            {this.props.username},
          </h1>
          <div className="selectCategoryDeliveredence">
            Please select what you want,
          </div>

          <div className="cetegory1" onClick={this.openItems}>
            <div className="hierarchyIconDiv" />
            <h2 className="categoryTitle">My Shop</h2>
          </div>

          <div className="cetegory2" onClick={this.openOrders}>
            <div className="hierarchyIconDiv" />
            <h2 className="categoryTitle">Orders</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
