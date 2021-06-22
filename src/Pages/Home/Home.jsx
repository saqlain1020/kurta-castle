import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeSlider from 'src/Components/HomeSlider/HomeSlider';

const useStyles = makeStyles((theme)=>({
    root:{
    
    }
}))

const Home = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <HomeSlider/>
        </div>
    )
}

export default Home;