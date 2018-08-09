/*eslint-disable*/

import React from 'react';

class TopTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab">
        <button
          className="tablinks"
          className={this.props.allActive}
          ref="all"
          id="all"
          onClick={this.props.diplayAllOrders}
        >
          All
        </button>

        <button
          className="tablinks"
          className={this.props.pendingActive}
          ref="pending"
          id="pending"
          onClick={this.props.diplayPendingOrders}
        >
          Pending
        </button>

        <button
          className="tablinks"
          className={this.props.ApprovedActive}
          ref="Approved"
          id="Approved"
          onClick={this.props.diplayApprovedOrders}
        >
          Approved
        </button>

        <button
          className="tablinks"
          className={this.props.DeliveredActive}
          ref="Delivered"
          id="Delivered"
          onClick={this.props.diplayDeliveredOrders}
        >
          Delivered
        </button>

      </div>
    );
  }
}

export default TopTab;
