import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from '../Common/AuthRoute';
import Landing from '../Landing/Landing';
import NotFound from '../Common/NotFound';
import Events from '../Events/Events';
import Event from '../Event/Event';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <AuthRoute exact path='/search/:query' component={Events} />
      <AuthRoute exact path='/event/:id' component={Event} />
      <Route path ='/' component={NotFound} />
    </Switch>
  </Router>
);

export default App;