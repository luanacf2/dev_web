import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro.jsx'; 
import Login from './pages/Login/Login.jsx'; 
import Principal from './pages/Principal/Principal.jsx'; 

const Routes = () => {
  return (
    <Router>
     
        <Route exact path="/" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/principal" component={Principal} />  
    
    </Router>
  );
};

export default Routes;
