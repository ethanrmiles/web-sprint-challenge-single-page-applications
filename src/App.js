import React from "react";
// import DeliveryOptions from './components/deliveryOptions'

const App = () => {
  return (
   <>
    <header>
     <div className="title">
       <h2>Lambda Eats</h2>
     </div>
     <div className="nav">
      <div className="nav-btn active" id='home'>Home</div>
      <div className="nav-btn " id='help'>Help</div>
     </div>
   </header>
   <section className="cta">
     <h1>Your favorite food, delivered while coding</h1>
     <button id='order-pizza'>Pizza?</button>
   </section>
   <section className="delivery-showcase">
       {/* <DeliveryOptions /> */}
   </section>

   </>
  );
};
export default App;
