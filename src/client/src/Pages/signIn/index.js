import React, { Component } from 'react';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.png';
import Input from '../../Components/Input';


library.add(faEnvelope, faUnlockAlt);


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


    handleSingIn = (e) => {
      e.preventDefault();
      const { email, password, keepLogin } = e.target;
      const { singInData } = this.state;
      this.setState({
        singInData: {
          email: email.value,
          password: password.value,
          keepLogin: keepLogin.checked,
        },
      });
      fetch('/signin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: singInData,
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSingIn}>
          <div className="sign">
            <div className="logo--container">
              <h1>
                <span>
                  M
                </span>
                  arket
                {' '}
                <span>
                  W
                </span>
                  ithout
                {' '}
                <span>
                  B
                </span>
                  orders
              </h1>
              <p>
                The Beautiful and the Banned!
              </p>
              <img src={logo} alt="logo" />
            </div>
            <div id="input--wraper">
              <Input placeholder="Email" icon={faEnvelope} name="email" />
              <Input placeholder="Password" icon={faUnlockAlt} name="password" />
              <div className="checkbox--container">

                <Input type="checkbox" name="keepLogin" id="keep-login" />
                <label htmlFor="keep-login">
                  Keep me logged in
                </label>
              </div>

            </div>
            <div id="button">
              <Input value="sign Up" type="submit" />
            </div>
            <div className="signup--link">
              <p>
Don’t have account?
              </p>
              <a href="/signup">
Sign up now
              </a>
            </div>
          </div>
        </form>
      );
    }
}

export default SignIn;
