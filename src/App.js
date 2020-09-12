import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';  
import Contact from './Contact';
import { Switch, Route, Redirect } from "react-router-dom";
import Getfood from "./Getfood";

const App = () => {
  return(
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/" />
       </Switch>
       <Getfood/>
    </>
  )
}
 
export default App;