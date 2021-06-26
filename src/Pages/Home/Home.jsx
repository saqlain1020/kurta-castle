import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeSlider from 'src/Components/HomeSlider/HomeSlider';
import AboutSection from 'src/Components/AboutSection/AboutSection';
import Features from 'src/Components/Features/Features';
import Bg from 'src/Components/Bg/Bg';
import NewArrivals from 'src/Components/NewArrivals/NewArrivals';
import SlidingText from 'src/Components/SlidingText/SlidingText';

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

            <AboutSection/>
            <NewArrivals/>
            <Features/>
            <SlidingText text="Best brand in town, Reasonable prices and fantastic quality." />
            </Bg>
        </div>
    )
}

export default Home;