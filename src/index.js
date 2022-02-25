import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Wrap App in Router:

ReactDOM.render(
<App />
, document.getElementById("root"));


//Notes from guided project: 
// * match    -> everything about the url
 //* location -> everything about where you are
 //* history  -> everything about where you were (or will be...)
 