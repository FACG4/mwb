/*eslint-disable*/
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import {
  faCheckCircle,
  faExclamationCircle,
  faBatteryQuarter
} from '@fortawesome/free-solid-svg-icons';
import HeaderWithSideBar from '../HeaderWithSideBar/index.js';
import DateInput from '../DateInput/index.js';
import Popup from '../popup/index.js';
import TopTab from '../TopTab/index.js';
let  date1='';


class DetaildOrderCard extends React.Component {
  static contextTypes = {
    router: () => true
  };

  constructor(props) {
    super(props);
    this.state = {
      newArrayAfterFetch: [],
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
      disableTheButton: false,
      theDate: '',
      theStatus: '',
      approvedOrDeliveredText:''
    };

    this.changeStatus = this.changeStatus.bind(this);
    this.editDeliverytime = this.editDeliverytime.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
  }

  changeStatus() {

    if (this.state.buttonLabel == 'Approved') {

      fetch('/changeOrderData', {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          newStatus: this.state.buttonLabel,
          orderId: this.state.newArrayAfterFetch[0].id
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.data.rowCount == 1) {
            this.setState({
              changingStatusPopup: 'Status was changed successfully!',
              changingStatusIcon: faCheckCircle,
              color: 'green',
              theStatus: res.data.rows[0].status

            });
          } else {
            this.setState({
              changingStatusPopup:
                'Something went wrong while updating status!!',
              changingStatusIcon: faExclamationCircle,
              color: 'red'
            });
          }
          if (this.state.theStatus == 'Pending') {
            this.setState({ buttonLabel: 'Approved' });
          } else if (this.state.theStatus == 'Approved') {
            this.setState({ buttonLabel: 'Delivered' });
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({ statusPopupMsg: true });
    }


















     else if (this.state.buttonLabel == 'Delivered') {
      this.props.history.push(
        `/tracker/${this.state.newArrayAfterFetch[0].id}`
      );
    }
  }

  editDeliverytime() {
    this.setState({ showDateInput: false });
  }

  handleDateInput(e) {
    fetch('/updateDeliveryTime', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newDeliveryTime: e.target.value.replace(/-/g, ''),
        orderId: this.state.newArrayAfterFetch[0].id
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.data.rowCount == 1) {
          this.setState({
            changingTimePopup: 'Deliverey date was updated successfully',
            changingDateIcon: faCheckCircle,
            color: 'green',
            theDate: res.data.rows[0].delivery_date.split('T')[0]
          });
        } else {
          this.setState({
            changingTimePopup: 'Something went wrong while updaing!!',
            changingDateIcon: faExclamationCircle,
            color: 'red'
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ datePopupMsg: true });
  }

  componentDidMount() {
    const id = this.props.match.params.order_id_to_render;
    fetch('/getAllOrders')
      .then(response => response.json())
      .then(data => {
        const data2 = data.data.filter(itemData => itemData.id == id);


        if(data2[0].status === 'Approved')
        {date1 = data2[0].approved_date.split('T')[0];}
        else {date1= data2[0].delivery_date.split('T')[0];}


        this.setState({
          newArrayAfterFetch: data2,
          buttonLabel: data2[0].status,
          theDate: date1,
          theStatus: data2[0].status
        });
        if (this.state.theStatus == 'Pending') {
          this.setState({ buttonLabel: 'Approved' , showDateDiv:false });
        } else if (this.state.theStatus == 'Approved') {
          this.setState({ buttonLabel: 'Delivered', showDateDiv:true , approvedOrDeliveredText:'Approved on'});
        } else if (this.state.theStatus == 'Delivered') {
          this.setState({ buttonLabel: ' Delivered', disableTheButton: true, showDateDiv:true, approvedOrDeliveredText:'Delivered by' });

           if(!data2[0].traking_number){
 this.props.history.push(`/tracker/${data2[0].id}`);           }
           else{}
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.newArrayAfterFetch.length == 0 ? (
          <div className="centerLoadingIcon">
            <ReactLoading type="spokes" color="grey" height={367} width={75} />
          </div>
        ) : (
          <div>
            <Popup
              message="Status was updated successfully!"
              onClick={() => {
                this.setState({ statusPopupMsg: false });
              }}
              icon={this.state.changingStatusIcon}
              isVisible={this.state.statusPopupMsg}
              tittle="Updated!"
              color={this.state.color}
              linkText="OK"
            />

            <Popup
              message={this.state.changingTimePopup}
              onClick={() => {
                this.setState({ datePopupMsg: false, showDateInput: true });
              }}
              isVisible={this.state.datePopupMsg}
              color={this.state.color}
              icon={this.state.changingDateIcon}
              tittle="Updated!"
              linkText="OK"
            />

            <HeaderWithSideBar title="Orders" />
            <div className="detailedItemCard">
              <div className="itemCardWithDetails">
                <i
                  className="fas fa-arrow-left back-arrow"
                  onClick={this.context.router.history.goBack}
                />
                <div className="dataDetailed">
                  <img
                    src={this.state.newArrayAfterFetch[0].image}
                    className="imgInDetailedCard"
                  />

                  <div className="labels">
                    <span className="ItemCardLabelBold">
                      Item:
                      <span className="ItemCardLabel">
                        {this.state.newArrayAfterFetch[0].title}
                      </span>
                    </span>

                    <span className="ItemCardLabelBold">
                      Order ID:
                      <span className="ItemCardLabel">
                        {this.state.newArrayAfterFetch[0].id}
                      </span>
                    </span>

                    <span className="ItemCardLabelBold">
                      Quantity:
                      <span className="ItemCardLabel">
                        {this.state.newArrayAfterFetch[0].quantity}
                      </span>
                    </span>

                    <div className={this.state.showDateDiv? 'showDateDiv':'hideDateDiv'}>
                      <span className="ItemCardLabelBold">
                        {this.state.approvedOrDeliveredText}:
                        <span className="ItemCardLabel">
                          {this.state.theDate}
                        </span>
                      </span>
                      <button
                        className="editDeliveryTime"
                        onClick={this.editDeliverytime}
                      >
                        Edit
                      </button>
                    </div>

                    <div>
                      <DateInput
                        visible={this.state.showDateInput}
                        onChange={this.handleDateInput}
                      />
                    </div>

                    <span className="ItemCardLabelBold">
                      Status:
                      <span className="ItemCardLabel">
                        {this.state.theStatus}
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={this.changeStatus}
                    className="redButton"
                    disabled={this.state.disableTheButton}
                  >
                    Mark as {this.state.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetaildOrderCard;
