/*eslint-disable*/
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch, Link,} from 'react-router-dom';
import ReactLoading from 'react-loading';
import { faCheckCircle, faExclamationCircle, faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';
import HeaderWithSideBar from '../HeaderWithSideBar/index.js';
import DateInput from '../DateInput/index.js';
import Popup from '../popup/index.js';
import TopTab from '../TopTab/index.js';

class DetaildOrderCard extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  constructor(props) {
    super(props);
    this.state = {
      myCursedArray: [],
      buttonLabel: 'Default',
      statusPopupMsg: false,
      datePopupMsg: false,
      showDateInput: true,
      newDeliveryTime: '',
      changingTimePopup: '',
      changingStatusPopup: '',
      changingDateIcon: '',
      color: '',
      changingStatusIcon: '',
    };

    this.changeStatus = this.changeStatus.bind(this);
    this.refreshTheCurrentPage = this.refreshTheCurrentPage.bind(this);
    this.editDeliverytime = this.editDeliverytime.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
  }


  changeStatus() {
    fetch('/changeOrderStatus', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newStatus: this.state.buttonLabel, orderId: this.state.myCursedArray[0].id }),
    })
    .then(res => res.json())
    .then((res) => {
      if (res.data.rowCount == 1) {
        this.setState({ changingStatusPopup: 'Status was changed successfully!', changingStatusIcon: faCheckCircle, color: 'green' });
       } else {
        this.setState({ changingStatusPopup: 'Something went wrong while updating status!!', changingStatusIcon: faExclamationCircle, color: 'red' });
      }
    })
    .catch((err) => { console.log(err); });
    this.setState({ statusPopupMsg: true });
  }


  refreshTheCurrentPage() {
    window.location = `${this.props.match.url}`;
  }

  editDeliverytime() {
    this.setState({ showDateInput: false });
  }

  handleDateInput(e) {
    fetch('/updateDeliveryTime', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newDeliveryTime: e.target.value, orderId: this.state.myCursedArray[0].id }),
    })
      .then(res => res.json())
      .then((res) => {
        if (res.data.rowCount == 1) { this.setState({ changingTimePopup: 'Deliverey date was updated success', changingDateIcon: faCheckCircle, color: 'green' }); } else { this.setState({ changingTimePopup: 'Something went wrong when updaing!!', changingDateIcon: faExclamationCircle, color: 'red' }); }
      })
      .catch((err) => { console.log(err); });
    this.setState({ datePopupMsg: true });
  }

  componentDidMount() {
    const id = this.props.match.params.order_id_to_render;
    fetch('/getAllOrders')
      .then(response => response.json())
      .then((data) => {
        const data2 = data.data.filter(itemData => itemData.id == id);
        this.setState({ myCursedArray: data2, buttonLabel: data2[0].status });
        if (this.state.buttonLabel == 'Pending') {
          this.setState({ buttonLabel: 'Recieved' });
        } else if (this.state.buttonLabel == 'Recieved') {
          this.setState({ buttonLabel: 'Sent' });
        } else if (this.state.buttonLabel == 'Sent') {
          console.log('seeeeeeeeeeeeeent');
          this.setState({ buttonLabel: 'Do nothing!!' });
        } // here we have to woooooorkkkkkkkkkkkkkkkkkkkk
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.myCursedArray.length == 0 ?
          (<div className="centerLoadingIcon">
              <ReactLoading type="spokes" color="grey" height={367} width={75} />
            </div>
          )
          : (
            <div>
              <Popup
                message="Status was updated successfully!"
                onClick={this.refreshTheCurrentPage}
                icon={this.state.changingStatusIcon}
                isVisible={this.state.statusPopupMsg}
                tittle="Updated!"
                color={this.state.color}
                linkText="OK"
              />

              <Popup
                message={this.state.changingTimePopup}
                onClick={this.refreshTheCurrentPage}
                isVisible={this.state.datePopupMsg}
                color={this.state.color}
                icon={this.state.changingDateIcon}
                tittle="Updated!"
                linkText="OK"
              />

              <HeaderWithSideBar title="Orders" />
              <div className="detailedItemCard">
                <div className="itemCardWithDetails">
                  <i className="fas fa-long-arrow-alt-left back-arrow" onClick={this.context.router.history.goBack} />
                  <div className="dataDetailed">
                    <img src={this.state.myCursedArray[0].image} className="imgInDetailedCard" />

                    <div className="labels">
                      <span className="ItemCardLabelBold">Item:
                        <span className="ItemCardLabel">
                          {this.state.myCursedArray[0].title}
                        </span>
                      </span>

                    <span className="ItemCardLabelBold">Order ID:
                      <span className="ItemCardLabel">
                        {this.state.myCursedArray[0].id}
                      </span>
                    </span>

                    <span className="ItemCardLabelBold">Quantity:
                      <span className="ItemCardLabel">
                        {this.state.myCursedArray[0].quantity}
                      </span>
                    </span>

                    <div>
                      <span className="ItemCardLabelBold">Delivered by:
                        <span className="ItemCardLabel">
                          {this.state.myCursedArray[0].deliverytime}
                        </span>
                      </span>
                      <button className="editDeliveryTime" onClick={this.editDeliverytime}>
                        Edit
                      </button>
                    </div>

                    <div>
                      <DateInput visible={this.state.showDateInput} onChange={this.handleDateInput} />
                    </div>

                    <span className="ItemCardLabelBold">Status:
                      <span className="ItemCardLabel">
                        {this.state.myCursedArray[0].status}
                      {' '}
                      </span>
                    </span>
                    </div>
                  </div>

                  <div>
                    <button onClick={this.changeStatus} className="redButton">
                      Mark as {this.state.buttonLabel}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )
      }
      </div>);
  }
}


export default DetaildOrderCard;
