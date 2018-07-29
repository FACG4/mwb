import React, { Fragment} from 'react';
import logo from './../../logo.png';
import GrayButton from './../../Components/grayButton/';
import Input from './../../Components/Input/';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faUnlockAlt, faUser, faPhoneVolume, faMapMarkerAlt, faAddressCard, faArrowLeft);


const signUp = () => {
    return (
        <div className="sign">
            <div className='logo--continer'>
                <span><FontAwesomeIcon icon={faArrowLeft} /></span>
                <img src={logo} />
            </div>
            <div id="input--wraper">
                <Input placeholder='Username'  icon={faUser} />
                <Input placeholder='Email'  icon={faEnvelope} type='email' />
                <Input placeholder='Password'  icon={faUnlockAlt} type='password' />
                <Input placeholder='Phone number'  icon={faPhoneVolume} type='number' />
                 <Input placeholder='Address'  icon={faMapMarkerAlt} />
                <Input placeholder='M-pesa number'  icon={faAddressCard}  /> 
            </div>
            <div id="button">
                <GrayButton title={'Sign Up'} />
            </div>
           

            
        </div>
    )

}

export default signUp;