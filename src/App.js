import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'


//Components used for Routes: 
// import DeliveryOptions from './components/deliveryOptions'
import Header from './components/header';
import Home from './components/Home';
import Pizza from './components/Pizza'
import Help from './components/Help'

const App = () => {
  return (
<Router>
   <Header />
   <Switch>
          <Route  path ='/' exact component = {Home} />
          <Route path='/help' component = {Help} />
          <Route path ='/pizza' component={Pizza} />
   </Switch>
</Router>
  );
};
export default App;
