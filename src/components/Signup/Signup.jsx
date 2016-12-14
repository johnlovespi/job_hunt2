import React, { Component } from 'react';
import style from './Signup.css';
import { Link } from 'react-router';

// create a React Component called _App_
class Signup extends Component {
  render(){
    return (
    <div className="intro-pages2">
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Signup</button>
     </div>
    );
  }
}

export default Signup;
        // <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        // <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        // <button onClick={this.props.postLogin}>Login</button>
        // <button onClick={this.props.logout}>Logout</button>
