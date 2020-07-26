import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from "../layout/NavBar";
import './signin.css';
import calendar from '../../assets/calendar64.png';
import axios from "axios";

function SignUp(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setconfPassword] = useState('');
    const [toHome, setRedirect] = useState(false);

    function onRegister(e){
        e.preventDefault()
        if(password.match(confpassword)){
            axios.post('http://127.0.0.1:8000/api/v1/auth/registration', {
                username: name,
                password1: password,
                password2: confpassword,
                email: email,
            })
                .then(function (response) {
                    localStorage.setItem('token', response.data);
                    setRedirect(localStorage.getItem('token') ? true : false);
                })
                .catch(function (error) {
                    console.log(error.response);
                });
            return <Redirect to="/" />
        }
        else{
            return <Redirect to="/signup" />
        }
    }
    if (toHome){
        return <Redirect to="/" />
    }
    else
    {
        return (
            <div>
                <NavBar />
                <div className="wrapper fadeInDown" id="loginform">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={calendar} id="icon" alt="Calendar Icon" />
                        </div>
                        <form onSubmit={onRegister}>
                            <input type="text" id="name" className="fadeIn first" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Username" />
                            <input type="email" id="email" className="fadeIn second" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="Email ID" />
                            <input type="password" id="password1" className="fadeIn third" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder="Password" />
                            <input type="password" id="password" className="fadeIn fourth" autoComplete="off" value={confpassword} onChange={e => setconfPassword(e.target.value)} name="password" placeholder="Password confirm" />
                            <input type="submit"  className="fadeIn fifth" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;