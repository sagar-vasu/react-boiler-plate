import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home,Signup,Login} from '../../Containers'

function BasicExample() {
  return (
    <Router>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Home} />
    </Router>
  );
}
export default BasicExample