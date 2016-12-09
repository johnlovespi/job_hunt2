import React from 'react';
import App from './App.jsx';
import Landingpage from './Landingpage/Landingpage.jsx';
import JobForm from './JobForm/JobForm.jsx';

import { Route, IndexRoute } from 'cd -router';

module.exports = (

  <Route path ="/" component={App}>
    <Route path ="/home" component={Landingpage}>
      <Route path ="/JobForm" component={JobForm}>

</Route>
);
