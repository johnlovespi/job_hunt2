import React, { Component } from 'react';

//import style from './SignupForm.css';
//import { Link } from 'react-router';

// create a React Component called _App_
class SignupForm extends Component {
render(){
    return (
  <div className="intro-pages">
        <div id='link-container'>
              <input id="input" onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
              <input id="input" onChange={this.props.trackSignupForm} type="password" placeholder="password"/>
              <button id="button" onClick={this.props.postSignup}>Signup</button>
        </div>
   </div>
  );
  }
}


export default SignupForm;

