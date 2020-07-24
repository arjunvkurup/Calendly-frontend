import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Calendly
                    </Typography>
                    <div className={classes.buttons}>
                        <Button variant="contained" color="default">
                            Sign Up
                        </Button>
                    </div>
                    <div className={classes.buttons}>
                        <Button variant="outlined" color="inherit">
                            Login
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
