import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from "../layout/NavBar";
import './signin.css';
import calendar from '../../assets/calendar64.png';

function SignUp(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setconfPassword] = useState('');
    const [toHome, setTohome] = useState(false);

    // function onRegister(e){
    //     if(password.match(confpassword)){
    //         e.preventDefault()
    //         firebase.auth().createUserWithEmailAndPassword(email, password);
    //         setTohome(true);
    //         return <Redirect to="/dashboard" />
    //     }
    //     else{
    //         return <Redirect to="/" />
    //     }
    // }
    // if (toHome){
    //     return <Redirect to="/" />
    // }
    // else
    // {
        return (
            <div>
                <NavBar />
                <div className="wrapper fadeInDown" id="loginform">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={calendar} id="icon" alt="Calendar Icon" />
                        </div>
                        <form   >
                            <input type="text" id="name" className="fadeIn first" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Full Name" />
                            <input type="email" id="email" className="fadeIn second" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="Email ID" />
                            <input type="password" id="password1" className="fadeIn third" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder="Password" />
                            <input type="password" id="password" className="fadeIn fourth" autoComplete="off" value={confpassword} onChange={e => setconfPassword(e.target.value)} name="password" placeholder="Password confirm" />
                            <input type="submit"  className="fadeIn fifth" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
        );
    // }
}

export default SignUp;