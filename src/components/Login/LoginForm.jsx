import React, { Component } from 'react';
import style from './LoginForm.css';
import { Link } from 'react-router';

// create a React Component called _App_
class LoginForm extends Component {
render(){
    return (
      <div className="intro-pages">
       <div>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button onClick={this.props.postLogin}>Login</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
      </div>
    );
  }
}
export default LoginForm;

