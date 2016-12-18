import React, { Component } from 'react';
import style from './LoginForm.css';
<<<<<<< HEAD
//import { Link } from 'react-router';

// create a React Component called _App_
class LoginForm extends Component {


  render(){
    return (
      <div className="intro-pages">
       <h1 className="intro-title">Log in</h1>
       <div id='link-container'>
          <div id="w1">
          <input id="input" onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
          <input id="input" onChange={this.props.trackLoginForm} type="password" placeholder="password"/>
          <button id="button" onClick={this.props.postLogin}>Login</button>
        </div>


      </div>
    </div>
    );
  }
}

export default LoginForm;





// import React, { Component } from 'react';
// import style from './LoginForm.css';


// // create a React Component called _App_
// class Login extends Component {
// render(){
//     return (
//       <div className="intro-pages">
//        <div>
//         <input onChange={this.props.trackLoginForm} value={this.props.login.username}type="text" placeholder="username"/>
//         <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
//         <button onClick={this.props.postLogin}>Login</button>
//         <button onClick={this.props.logout}>Logout</button>
//       </div>
//       </div>
//     );
//   }
// }
// export default Login;

=======
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

>>>>>>> 5fc7f8968c3dcc407bac0a6b29eee821b07ac04d
