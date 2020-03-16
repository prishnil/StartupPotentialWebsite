import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Redirect, Switch } from "react-router-dom";

//Components
import Onboarding from "./Onboarding/Onboarding";
import Signup from "./Signup/Signup";
import Signup2 from "./Signup2/Signup2";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Success from "./Success/Success";
import Verify from "./Verify/Verify";



class App extends Component {
  render () {
    return (
          <Router>
            <Switch>
              <Route exact path="/" component={Onboarding} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Signup2" component={Signup2} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Success" component={Success} />
              <Route exact path="/Verify" component={Verify} />


            </Switch>
          </Router>

  );
};
};

export default App;
