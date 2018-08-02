/*eslint-disable*/
import React from 'react';
import './index.css';
import logo from './images/logo.png';

const HeaderWithSideBar = props => {
  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
  };

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
  };

  return (
    <div>
      <div className="headerDiv">
        <div>
          <i onClick={openNav} className="fas fa-bars menuIcon" />
        </div>

        <div>
          <h2 className="headerTitle">{props.title}</h2>
        </div>

        <div>
          <i className="fas fa-bell notificationIcon" />
        </div>
      </div>

      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <span className="crossIcon">&times;</span>
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
        <a href="/signup">
          <i className="fas fa-sign-out-alt" /> Logout
        </a>
      </div>
    </div>
  );
};

export default HeaderWithSideBar;
