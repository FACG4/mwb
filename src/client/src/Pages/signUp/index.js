import React, { Fragment} from 'react';
import logo from './../../logo.png';
import GrayButton from './../../Components/grayButton/'
const signUp = () => {
    return (
        <Fragment>
            <h1><span>M</span>arket <span>W</span>ithout <span>B</span>old</h1>
            <p>The Beautiful and the Banned!</p>
            <img src={logo} />
            <GrayButton title={'sign Up'} />
        </Fragment>
    )

}

export default signUp;