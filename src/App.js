import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn'
import SignUp from "./components/auth/SignUp";
import Scheduler from "./components/dashboard/Scheduler";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' component={Scheduler} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
