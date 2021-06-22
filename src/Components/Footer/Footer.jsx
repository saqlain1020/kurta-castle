import React from 'react';
import { makeStyles, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
    
    }
}))

const Footer = () => {
    const classes = useStyles();
    
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    
                </Grid>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}></Grid>
            </Grid>
        </Container>
    )
}

export default Footer;