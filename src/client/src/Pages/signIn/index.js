import React, { Fragment} from 'react';
import logo from './../../logo.png';
import GrayButton from './../../Components/grayButton/';
import Input from './../../Components/Input/';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, } from '@fortawesome/free-solid-svg-icons';


library.add(faStroopwafel);


const signIn = () => {
    return (
        <div className="sign">
            <div className="logo--container">
                <h1><span>M</span>arket <span>W</span>ithout <span>B</span>old</h1>
                <p>The Beautiful and the Banned!</p>
                <img src={logo} />
            </div>
            <div id="input--wraper">
                <Input placeholder='Email'  icon={faStroopwafel} />
                <Input placeholder='Password'  icon={faStroopwafel} />
                <div className='checkbox--container'>
                    
                    <Input type='checkbox' />
                    <label>Keep me logged in</label>
                </div>

            </div>
            <div id="button">
                <GrayButton title={'sign Up'} />
            </div>
            <div className="signup--link">
                <p>Don’t have account?</p><a href="">Sign up now</a>
            </div>
        </div>
    )

}

export default signIn;
