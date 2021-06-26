import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeSlider from 'src/Components/HomeSlider/HomeSlider';
import AboutSection from 'src/Components/AboutSection/AboutSection';
import Features from 'src/Components/Features/Features';
import Bg from 'src/Components/Bg/Bg';

const useStyles = makeStyles((theme)=>({
    root:{
    marginTop:20,
    }
}))

const Home = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>

            <HomeSlider/>
            <Bg>

            <Features/>
            <AboutSection/>
            </Bg>
        </div>
    )
}

export default Home;