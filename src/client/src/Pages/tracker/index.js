/*eslint-disable*/
import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input';
import Popup from '../../Components/popup';
import HeaderWithSideBar from '../../Components/HeaderWithSideBar';

import './style.css';

library.add(faArrowLeft, faCheckCircle);

class Tracker extends Component {
  static contextTypes = {
    router: () => true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      trakerNumberData: {},
    };
  }

  handelTrackNumber = (e) => {
    e.preventDefault();
  };

  visablePopUp = () => {
    this.setState({ isModalVisible: true });
  };

  hiddenPopUp = () => {
    this.setState({ isModalVisible: false });
  };

  handelTrackNumber = (e) => {
    e.preventDefault();
    const { trakerNumber } = e.target;
    const { trakerNumberData } = this.state;
    this.setState(
      {
        trakerNumberData: {
          trakerNumber: trakerNumber.value,
        },
      },
      () => {
        fetch('/api/tracker', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'content-type': 'application/json',


          },
          body: JSON.stringify({
            trakerNumber: this.state.trakerNumberData.trakerNumber,
            orderId: this.props.match.params.order_id_for_tracking,
          }),
        }).then(() => this.visablePopUp());
      },
    );
  };

  render() {
    const { isModalVisible } = this.state;
    return (
      <Fragment>
        <HeaderWithSideBar title="Orders" />
        <form onSubmit={this.handelTrackNumber} className="track--form">
          <span onClick={() => this.context.router.history.go(-2)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <h2>Enter tracking number</h2>
          <p>
            Adding tracking number is a way to confirm sending the order. To do
            so, please enter the tracking number in the field below
          </p>


          <Input
            placeholder="Enter Tracking Number"
            type="text"
            name="trakerNumber"
          />


          <div className="buttonsDiv">
            <Input value="Send" type="submit" className="green" />
            <button className="redBtn" onClick={() => window.location = '/orders'}>Cancel </button>
          </div>
        </form>

        <Popup
          onClick={this.hiddenPopUp}
          isVisible={isModalVisible}
          tittle="Success!"
          icon={faCheckCircle}
          message="The item has added successfully!"
          linkText="OK"
          color="green"
        />
      </Fragment>
    );
  }
}

export default Tracker;
