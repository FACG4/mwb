/*eslint-disable*/
import React from 'react';
import './index.css';

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showdetails = this.showdetails.bind(this);
  }

  showdetails(e) {
    const id = e.target.id;
    this.props.props.history.push(`/order/${id}`);
  }

  render() {
    return (
      <div
        className="itemCard"
        id={this.props.orderID}
        onClick={this.showdetails}
      >
        <div className="data dataDiv" id={this.props.orderID}>
          <div id={this.props.orderID}>
            <span className="ItemCardLabelBold" id={this.props.orderID}>
              Item:
            </span>{' '}
            <span id={this.props.orderID} className="ItemCardLabel">
              {this.props.itemName}
            </span>
          </div>

          <div id={this.props.orderID}>
            <span className="ItemCardLabelBold" id={this.props.orderID}>
              Order ID:
            </span>{' '}
            <span id={this.props.orderID} className="ItemCardLabel">
              {this.props.orderID}
            </span>
          </div>

          <div id={this.props.orderID}>
            <span className="ItemCardLabelBold" id={this.props.orderID}>
              Quantity:
            </span>{' '}
            <span id={this.props.orderID} className="ItemCardLabel">
              {this.props.quantity}
            </span>
          </div>

          <div id={this.props.orderID}>
            <span className="ItemCardLabelBold" id={this.props.orderID}>
              Status:
            </span>{' '}
            <span id={this.props.orderID} className="ItemCardLabel">
              {this.props.status}
            </span>
          </div>
        </div>
        <div className="image" id={this.props.orderID}>
          <img id={this.props.orderID} src={this.props.src} className="img" />
        </div>
      </div>
    );
  }
}

export default OrderCard;
