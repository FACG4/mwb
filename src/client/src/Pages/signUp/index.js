import React, { Fragment, Component } from 'react';
import logo from './../../logo.png';
import GrayButton from './../../Components/grayButton/';
import Input from './../../Components/Input/';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft);

/* eslint-disable react/jsx-filename-extension */
class SignUp extends Component {
  constructor(props) {
        super(props);
        this.state = {};
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, phone, address, mPesa } = e.target;
        this.setState({
            singUpData : {
                username: username.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                address: address.value,
                mPesa: mPesa.value,
            }
        });
        fetch('/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: this.state.singUpData
        })
    }
    render(){
        return (
            <form onSubmit={this.handelSubmit}>
            <div className="sign">
                <div className='logo--continer'>
                    <span><FontAwesomeIcon icon={faArrowLeft} /></span>
                    <img src={logo} />
                </div>
                <div id="input--wraper">
                    <Input placeholder='Username'  icon={faUser} name="username" />
                    <Input placeholder='Email'  icon={faEnvelope} type='email' name="email" />
                    <Input placeholder='Password'  icon={faUnlockAlt} type='password' name="password" />
                    <Input placeholder='Phone number'  icon={faPhoneVolume} type='number' name="phone" />
                     <Input placeholder='Address'  icon={faMapMarkerAlt} name="address" />
                    <Input placeholder='M-pesa number'  icon={faAddressCard} name="mPesa" /> 
                </div>
                <div id="button">
                    <Input value={'Sign Up'} type="submit"  />
                </div>
            </div>
            </form>
        )
    
    }
    
}

export default SignUp;