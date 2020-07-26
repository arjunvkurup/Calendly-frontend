import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import axios from "axios";
import Redirect from "react-router-dom/es/Redirect";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        secondary: {
            main: '#f5f5f5',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    buttons: {
        marginRight: theme.spacing(2)
    }
}));

export default function NavBar() {
    const [toHome, setRedirect] = useState(false);
    const [data, setData] = useState('');
    const logoutAuth = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/auth/logout/')
            .then(function (response) {
                if(response.data.detail == "Successfully logged out."){
                    console.log("Logout successful")
                    setRedirect(true);
                    setData(response.data.detail)
                    return <Redirect to="/signup" />
                }
                else{
                    console.log("Logout unsuccessful")
                    setRedirect(false);
                }
            })
            .catch(function (error) {
                console.log(error.response);
            });

    }
    const classes = useStyles();


    if(localStorage.getItem('token') && data != "Successfully logged out."){
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {/*TODO: Removed onClick={preventDefault} from Link*/}
                            <Link variant="contained" underline="none" color="inherit" href="/" >
                                Calendly
                            </Link>
                        </Typography>
                        <div className={classes.buttons}>
                            <Button variant="outlined"  underline="none" color="inherit" href="/" onClick={logoutAuth}>
                                Logout
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
    else{
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {/*TODO: Removed onClick={preventDefault} from Link*/}
                            <Link variant="contained" underline="none" color="inherit" href="/" >
                                Calendly
                            </Link>
                        </Typography>
                        <div className={classes.buttons}>
                            <Link variant="contained" underline="none" color="inherit" href="/signup" >
                                Sign Up
                            </Link>
                        </div>
                        <div className={classes.buttons}>
                            <Link variant="outlined"  underline="none" color="inherit" href="/" >
                                Login
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}
