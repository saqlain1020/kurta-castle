import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:20,
    }
}))

const AboutSection = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
           <Container maxWidth="lg">

           </Container>
        </div>
    )
}

export default AboutSection;