import React, {Component, useState} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn'
import SignUp from "./components/auth/SignUp";
import Scheduler from "./components/dashboard/Scheduler";
import AvailableSchedule from "./components/dashboard/AvailableSchedule";
import InvalidUser from "./components/auth/InvalidUser";


function App(){
    if(localStorage.getItem('token')){
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Scheduler} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/slots' component={AvailableSchedule} />
                        <Route render={() => <h1 className="font-weight-bold text-center pagenotfound">404 Page Not Found!</h1>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
    else{
        return(
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={InvalidUser} />
                    </Switch>
                </div>
            </BrowserRouter>
            );
    }

}

export default App;
