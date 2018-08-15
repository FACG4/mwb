/*eslint-disable*/

import React from 'react';
import './index.css';

class NotificationDiv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notification">
        <span>
          <strong>Reminder:</strong> Order id {this.props.id} should be deliverd
          on {this.props.delivery_date}
        </span>
      </div>
    );
  }
}

export default NotificationDiv;
