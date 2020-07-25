import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

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
    const classes = useStyles();
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
