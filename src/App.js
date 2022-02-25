import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'


//Components used for Routes: 
// import DeliveryOptions from './components/deliveryOptions'
import Header from './components/header';
import Home from './components/Home';
import Pizza from './components/Pizza'

const App = () => {
  return (
   <>
   <Header />
   <Home />
   <Pizza />
   <section className="delivery-showcase">
       {/* <DeliveryOptions /> */}
   </section>

   </>
  );
};
export default App;
