import React, { Component } from 'react';

import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.png';
import Input from '../../Components/Input';

library.add(
  faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft,
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    handelSubmit = (e) => {
      e.preventDefault();
      const {
        username, email, password, phone, address, mPesa,
      } = e.target;
      const { singUpData } = this.state;
      this.setState({
        singUpData: {
          username: username.value,
          email: email.value,
          password: password.value,
          phone: phone.value,
          address: address.value,
          mPesa: mPesa.value,
        },
      });

      fetch('/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: singUpData,
      });
    }

    render() {
      return (
        <form onSubmit={this.handelSubmit}>
          <div className="sign">
            <div className="logo--continer">
              <span>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <img src={logo} alt="logo" />
            </div>
            <div id="input--wraper">
              <Input placeholder="Username" icon={faUser} name="username" />
              <Input placeholder="Email" icon={faEnvelope} type="email" name="email" />
              <Input placeholder="Password" icon={faUnlockAlt} type="password" name="password" />
              <Input placeholder="Phone number" icon={faPhoneVolume} type="number" name="phone" />
              <Input placeholder="Address" icon={faMapMarkerAlt} name="address" />
              <Input placeholder="M-pesa number" icon={faAddressCard} name="mPesa" />
            </div>
            <div id="button">
              <Input value="Sign Up" type="submit" />
            </div>
          </div>
        </form>
      );
    }
}

export default SignUp;
