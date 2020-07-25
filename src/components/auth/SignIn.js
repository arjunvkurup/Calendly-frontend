import React, {useState} from 'react';
import NavBar from "../layout/NavBar";
import './signin.css';
import calendar from '../../assets/calendar64.png';
import Link from "@material-ui/core/Link";

function SignIn(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [toHome, setTohome] = useState(false);

    return(
        <div>
            <NavBar />
            <div className="wrapper fadeInDown" id="loginform">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={calendar} id="icon" alt="Calendar Icon" />
                    </div>
                    <form >
                        <input type="email" id="username" className="fadeIn second" autoComplete="off" autoFocus value={username} onChange={e => setUsername(e.currentTarget.value)} placeholder="Email" required />
                        <input type="password" id="password" className="fadeIn third" autoComplete="off" value={password} onChange={e => setPassword(e.currentTarget.value)} placeholder="Password"  required/>
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <Link className="underlineHover" variant="outlined"  underline="none" color="inherit" href="/signup" >
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                    <div id="formFooter">
                        <Link className="underlineHover" variant="outlined"  underline="none" color="inherit" href="/signup" >
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn;