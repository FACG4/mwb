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
          className={this.props.recievedActive}
          ref="recieved"
          id="recieved"
          onClick={this.props.diplayRecievedOrders}
        >
          Recieved
        </button>

        <button
          className="tablinks"
          className={this.props.sentActive}
          ref="sent"
          id="sent"
          onClick={this.props.diplaySentOrders}
        >
          Sent
        </button>

      </div>
    );
  }
}

export default TopTab;
