import React from 'react';
import App from './App.jsx';
import Landingpage from './Landingpage/Landingpage.jsx';
import JobForm from './JobForm/JobForm.jsx';

import { Route, IndexRoute } from 'cd -router';

module.exports = (

  <Route path ="/" component={App}>
    <Route path ="/" component={Landingpage}/>
      <Route path ="/" component={JobForm}/>
      </Route>
      </Route>
      </Route>
</Route>
);
