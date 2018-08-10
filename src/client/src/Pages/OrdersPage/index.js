/*eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from 'react-loading';
import OrderCard from '../../Components/OrderCard/index';
import HeaderWithSideBar from '../../Components/HeaderWithSideBar/index.js';
import TopTab from '../../Components/TopTab/index.js';
import DetaildOrderCard from '../../Components/DetaildOrderCard/index.js';
import './index.css';

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersArray: [],
      pendingActive: '',
      ApprovedActive: '',
      DeliveredActive: '',
      allActive: 'active'
    };
    this.diplayPendingOrders = this.diplayPendingOrders.bind(this);
    this.diplayApprovedOrders = this.diplayApprovedOrders.bind(this);
    this.diplayDeliveredOrders = this.diplayDeliveredOrders.bind(this);
    this.diplayAllOrders = this.diplayAllOrders.bind(this);
  }

  diplayPendingOrders() {
    this.setState({
      pendingActive: 'active',
      ApprovedActive: '',
      DeliveredActive: '',
      allActive: ''
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'Pending') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'none';
      } else {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  diplayApprovedOrders() {
    this.setState({
      ApprovedActive: 'active',
      pendingActive: '',
      DeliveredActive: '',
      allActive: ''
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'Approved') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'none';
      } else {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  diplayDeliveredOrders() {
    this.setState({
      ApprovedActive: '',
      pendingActive: '',
      DeliveredActive: 'active',
      allActive: ''
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'Delivered') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'none';
      } else {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  diplayAllOrders() {
    this.setState({
      ApprovedActive: '',
      pendingActive: '',
      DeliveredActive: '',
      allActive: 'active'
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'BlaBlaBla!') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  componentDidMount() {
    fetch('/getAllOrders')
      .then(response => response.json())
      .then(data => {
        this.setState({ ordersArray: data.data });
      })
      .catch(err => {
        console.log(
          'Something error happened while trying getting all orders: ',
          err
        );
      });
  }

  render() {
    return (
      <div>
        <HeaderWithSideBar title="Orders" />
        <TopTab
          diplayAllOrders={this.diplayAllOrders}
          diplayPendingOrders={this.diplayPendingOrders}
          diplayApprovedOrders={this.diplayApprovedOrders}
          diplayDeliveredOrders={this.diplayDeliveredOrders}
          allActive={this.state.allActive}
          pendingActive={this.state.pendingActive}
          ApprovedActive={this.state.ApprovedActive}
          DeliveredActive={this.state.DeliveredActive}
        />

        <div>
          {this.state.ordersArray.length === 0 ? (
            <div className="centerLoadingIcon">
              <ReactLoading
                type="spokes"
                color="grey"
                height={367}
                width={75}
              />
            </div>
          ) : (
            this.state.ordersArray.map((order, index) => (
              <OrderCard
                key={index}
                props={this.props}
                itemName={order.title}
                src={order.image}
                orderID={order.id}
                quantity={order.quantity}
                status={order.status}
                ref={'index'.concat(order.id)}
                color={order.status}
               />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default OrdersPage;
