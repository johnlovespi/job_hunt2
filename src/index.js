import React    from 'react';
import ReactDOM from 'react-dom';
//import routes   from './components/App.jsx';
import JobForm  from './components/JobForm/JobForm.jsx';
import App from './components/App.jsx';
import Login from './components/Login/LoginForm.jsx';
import Signup from './components/Signup/Signup.jsx';
// import Landp from './Landp/Landp.jsx'
import routes from './components/routes.js';
import { Router, Route, Link, hashHistory } from 'react-router';

// mount our App at #container
// module.exports = ()
ReactDOM.render((
 <Router history={browserHistory}>

  <Route path ="/" component={App}>

  <Route path="/login" component={Login}>
  <Route path="/signup" component={Signup}>
    </Route>
   </Route>
   </Route>
</Router>
), document.querySelector('#root-container'));

    // <Route path ="/jobform" component={JobForm} />
    // <IndexRoute component={Landp} />

  // <App />,

  // <Route path ="/" component={App}/>
