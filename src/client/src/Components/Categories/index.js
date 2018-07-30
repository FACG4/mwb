import React from 'react';
import './index.css';
import shoppingBag from './images/shoppingBag.png';
import hierarchy from './images/hierarchy.svg';
import HeaderWithSideBar from '../HeaderWithSideBar/index.js'

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.openOrders=this.openOrders.bind(this);
  }

openOrders(){
  window.location = 'orders';
}


  render(){return(<div>
<HeaderWithSideBar title={"Home"} />


    <div className="categoriesDiv">
<h1 className="usernameInHomePage">Hey {this.props.username},</h1>
<div className="selectCategorySentence">Please select what you want,</div>


<div className="cetegory1" >
<div className="hierarchyIconDiv"><img src={shoppingBag} alt="shoppingBagIcon" className="hierarchyIcon"/></div>
<h2 className="categoryTitle">Items</h2>
</div>


<div className="cetegory2" onClick={this.openOrders}>
<div className="hierarchyIconDiv"><img src={hierarchy} alt="hierarchy" className="hierarchyIcon"/></div>
<h2 className="categoryTitle">Orders</h2>
</div>

    </div>
</div>
  )}
}


export default Categories;
