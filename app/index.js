import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import MountingPhase from './components/MountingPhase';
import UpdatingPhase from './components/UpdatingPhase';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
      <Route path='mounting-phase' component={MountingPhase} />
      <Route path='updating-phase' component={UpdatingPhase} />
  </Router>,
  document.getElementById('app')
);
