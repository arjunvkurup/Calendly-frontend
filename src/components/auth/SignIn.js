import React, {useState} from 'react';
import NavBar from "../layout/NavBar";
import './signin.css';
import calendar from '../../assets/calendar64.png';
import Link from "@material-ui/core/Link";
import credentialsStore from '../../privateConf';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    // const [toHome, setTohome] = useState(false);


    const onLogin = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/auth/login/', {
            username: username,
            email: email,
            password: password
        })
            .then(function (response) {
                localStorage.setItem('token', response.data);
                setRedirect(localStorage.getItem('token') ? true : false);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    if (redirect) {
        return <Redirect to="/" />;
    } else {
        return (
            <div>
                <NavBar />
                <div className="wrapper fadeInDown" id="loginform">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={calendar} id="icon" alt="Calendar Icon"/>
                        </div>
                        <form onSubmit={onLogin}>
                            <input type="text" id="username" className="fadeIn second" autoComplete="off" autoFocus
                                   value={username} onChange={e => setUsername(e.currentTarget.value)}
                                   placeholder="Username" required/>
                            <input type="email" id="email" className="fadeIn third" autoComplete="off" value={email}
                                   onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" required/>
                            <input type="password" id="password" className="fadeIn fourth" autoComplete="off"
                                   value={password} onChange={e => setPassword(e.currentTarget.value)}
                                   placeholder="Password" required/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>
                        <div id="formFooter">
                            <Link className="underlineHover" variant="outlined" underline="none" color="inherit"
                                  href="/signup">
                                Don't have an account? Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignIn;