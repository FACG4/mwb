import React, { Component } from 'react';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.png';
import Input from '../../Components/Input';


library.add(faEnvelope, faUnlockAlt);

const initState = {
  fullName: '',
  password: '',
  keepLogin: '',
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initState,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSingIn = (e) => {
    e.preventDefault();
    fetch('/signin', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then((res) => {
        if (res.user) localStorage.setItem('user', res.user.split(' ')[0]);
        if (res.message === 'login successful') this.props.history.push('/');
        if (res.message !== 'login successful') document.querySelector('#message-container').textContent = res.message;
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
            <Input placeholder="Full Name" name="fullName" onChange={this.handleChange} />
            <Input placeholder="Password" name="password" type="password" onChange={this.handleChange} />
            <div>
              <h3 id="message-container" />
            </div>
            <div className="checkbox--container">

              <Input type="checkbox" name="keepLogin" id="keep-login" onChange={this.handleChange} />
              <label className="keepLoginMe" htmlFor="keep-login">
                Keep me logged in
              </label>
            </div>

          </div>
          <div id="button">
            <Input value="sign In" type="submit" />
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
