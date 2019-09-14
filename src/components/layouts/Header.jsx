import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../layouts/Drawer.jsx';

const Header = () => {
    const classes = useStyles();
    const onDrawerToggle = () => {

    }
    return (
        <div className={classes.header}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Doggy-Style
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

}));

export default Header;