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

const initState = {
  username: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  mPesa: ""
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state =  {...initState} ;
  }

    handleInputChange = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

    handelSubmit = (e) => {
      e.preventDefault();
      this.setState({...initState})

      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }).then(console.log(this.state));
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
              <Input placeholder="Username" icon={faUser} name="username" value={this.state.username} onChange={this.handleInputChange}/>
              <Input placeholder="Email" icon={faEnvelope} type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              <Input placeholder="Password" icon={faUnlockAlt} type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              <Input placeholder="Phone number" icon={faPhoneVolume} type="number" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
              <Input placeholder="Address" icon={faMapMarkerAlt} name="address" value={this.state.address} onChange={this.handleInputChange} />
              <Input placeholder="M-pesa number" icon={faAddressCard} name="mPesa" value={this.state.mPesa} onChange={this.handleInputChange} />
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
