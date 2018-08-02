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
      recievedActive: '',
      sentActive: '',
      allActive: 'active',
    };
    this.diplayPendingOrders = this.diplayPendingOrders.bind(this);
    this.diplayRecievedOrders = this.diplayRecievedOrders.bind(this);
    this.diplaySentOrders = this.diplaySentOrders.bind(this);
    this.diplayAllOrders = this.diplayAllOrders.bind(this);
  }

  diplayPendingOrders() {
    this.setState({
      pendingActive: 'active', recievedActive: '', sentActive: '', allActive: '',
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

  diplayRecievedOrders() {
    this.setState({
      recievedActive: 'active', pendingActive: '', sentActive: '', allActive: '',
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'Recieved') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'none';
      } else {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  diplaySentOrders() {
    this.setState({
      recievedActive: '', pendingActive: '', sentActive: 'active', allActive: '',
    });
    let requiredIndex;
    for (let i = 1; i <= this.state.ordersArray.length; i++) {
      requiredIndex = 'index'.concat(i);
      if (this.refs[requiredIndex].props.status !== 'Sent') {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'none';
      } else {
        ReactDOM.findDOMNode(this.refs[requiredIndex]).style.display = 'flex';
      }
    }
  }

  diplayAllOrders() {
    this.setState({
      recievedActive: '', pendingActive: '', sentActive: '', allActive: 'active',
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
      .then((data) => {
        this.setState({ ordersArray: data.data });
      })
      .catch((err) => {
        console.log('Something error happened while trying getting all orders: ', err);
      });
  }

  render() {
    return (
      <div>
        <HeaderWithSideBar title="Orders" />
        <TopTab
          diplayAllOrders={this.diplayAllOrders}
          diplayPendingOrders={this.diplayPendingOrders}
          diplayRecievedOrders={this.diplayRecievedOrders}
          diplaySentOrders={this.diplaySentOrders}
          allActive={this.state.allActive}
          pendingActive={this.state.pendingActive}
          recievedActive={this.state.recievedActive}
          sentActive={this.state.sentActive}
        />

        <div>
          {this.state.ordersArray.length === 0
            ? (
              <div className="centerLoadingIcon">
                <ReactLoading type="spokes" color="grey" height={367} width={75} />
              </div>
            )
            : this.state.ordersArray.map((order, index) => (
              <OrderCard
                key={index}
                props={this.props}
                itemName={order.title}
                src={order.image}
                orderID={order.id}
                quantity={order.quantity}
                status={order.status}
                ref={'index'.concat(order.id)}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default OrdersPage;
