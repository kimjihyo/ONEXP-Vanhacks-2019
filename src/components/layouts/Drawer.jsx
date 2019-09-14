import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Drawer as MaterialDrawer, Divider, List, ListItem } from '@material-ui/core';

const Drawer = () => {
    const classes = useStyles();
    return (
        <div className={classes.drawer}>
            <Drawer>
                <div>
                    <List>
                        <ListItem>
                            hello world
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}


const useStyles = makeStyles(theme => ({

}));

export default Drawer;