import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


import Login from './pages/Login/login';
import Teste from './pages/Teste/teste';
import { Home } from './pages/Home/home';
import { Areas } from './pages/Areas/areas';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} /> {/* Login */}
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/teste' component={Teste}/>
        <Route exact path='/areas' component={Areas}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();