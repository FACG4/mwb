import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Input from '../../Components/Input';
import Popup from '../../Components/popup';

import './style.css';

library.add(faArrowLeft, faCheckCircle);


class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      trakerNumberData: { },
    };
  }

  handelTrackNumber = (e) => {
    e.preventDefault();
  }

  visablePopUp = () => {
    this.setState({ isModalVisible: true });
  }

  hiddenPopUp = () => {
    this.setState({ isModalVisible: false });
  }

  handelTrackNumber = (e) => {
    e.preventDefault();
    const {
      trakerNumber,
    } = e.target;
    const { trakerNumberData } = this.state;
    this.setState({
      trakerNumberData: {
        trakerNumber: trakerNumber.value,
      },
    }, () => {
      fetch('/tracker', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: trakerNumberData,
      }).then(
        () => this.visablePopUp(),
      );
    });
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handelTrackNumber} className="track--form">
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <h2>
              Enter tracking number
          </h2>
          <p>
            This number is to Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
          <Input placeholder="Enter Tracking Number" type="text" name="trakerNumber" />
          <Input value="send" type="submit" />
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
