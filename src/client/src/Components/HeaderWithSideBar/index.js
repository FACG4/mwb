/*eslint-disable*/
import React from 'react';
import './index.css';
import logo from './images/logo.png';
import NotificationDiv from '../NotificationDiv';
import ReactLoading from 'react-loading';
var a = [];

class HeaderWithSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersArray: [],
      nearOrders: [{}],
      showRedDot: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.openNotification = this.openNotification.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    fetch('/signout', {
      method: 'POST',
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(res => {
      if (res.message) window.location = 'signin';
      localStorage.removeItem('user')
    })
  }

  componentDidMount() {
    fetch('/getAllOrders', {
      credentials: 'same-origin',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          if (data.message.includes('redirect to signin page')) this.props.history.push('/signin');
          if (data.message.includes('unauthorized')) this.props.history.push('/signin');
        }
        this.setState({ ordersArray: data.data }, () => {
          let orderDate;
          let currentDate = new Date();

          this.state.ordersArray.map(order => {
            orderDate = new Date(order.delivery_time);
            var timeDiff = Math.abs(
              orderDate.getTime() - currentDate.getTime()
            );
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays === 3) {
              this.setState(prevState => ({
                showRedDot: true,
                nearOrders: prevState.nearOrders.map(obj => {
                  a.push(order);
                  return order;
                })
              }));
            }
          });
        });
      })
      .catch(err => {
        console.log(
          'Something error happened while trying getting all orders: ',
          err
        );
      });
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  openNotification(e) {
    document.getElementById('mySideNotification').style.width = '250px';
    document.getElementById('mySideNotification').classList.add('hidden47');
  }

  closeNotification(e) {
    document.getElementById('mySideNotification').classList.remove('hidden47');
    document.getElementById('mySideNotification').style.width = '0';
  }

  render() {
    return (
      <div>
        <div className="headerDiv">
          <div>
            <i onClick={this.openNav} className="fas fa-bars menuIcon" />
          </div>

          <div>
            <h2
              className={`headerTitle ${
                this.props.newStyle ? 'takeNewStyle' : ''
              }`}
            >
              {this.props.title}
            </h2>
          </div>

          <div>
            <i
              onClick={this.openNotification}
              className="fas fa-bell notificationIcon"
            >
              <span
                className={`dot ${
                  this.state.showRedDot ? 'visible' : 'hidden'
                }`}
              />
            </i>
          </div>
        </div>

        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            <span className="crossIconForHeader">&times;</span>
          </a>

          <div className="sideBarImgDiv">
            <img src={logo} className="sideBarImg" alt="LOGO" />
          </div>

          <a href="/" className="sideMenuLabel">
            <i className="fas fa-home sideMenuLabel" /> Home
          </a>

          <a href="#">
            <i className="fas fa-user" /> Profile
          </a>

          <button className="sign-out-link" onClick={this.handleSignout} >
            <i className="fas fa-sign-out-alt" /> Sign out
          </button>
        </div>

        <div id="mySideNotification" className="sideNotification">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNotification}
          >
            <span className="crossIconForNotification">&times;</span>
          </a>

          <div>
            {a.length === 0 ? (
              <div className="centerLoadingIcon">
                <h1>There is no notifications!!</h1>
              </div>
            ) : (
              a.map((order, index) => (
                <NotificationDiv
                  id={order.id}
                  delivery_time={order.delivery_time.split('T')[0]}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderWithSideBar;
