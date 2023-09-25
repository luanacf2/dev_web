import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './Cadastro'; 
import Login from './Login'; 
import Principal from './Principal'; 

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/principal" component={Principal} />
      </Switch>
    </Router>
  );
};

export default Routes;
