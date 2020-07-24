import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from './components/auth/Signin'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Signin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
