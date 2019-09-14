import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../layouts/Header.jsx';


const Page = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.page}>
            <Header />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    page: {

    }
}));

export default Page;