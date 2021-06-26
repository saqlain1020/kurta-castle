import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
    background:"rgb(212,175,55,0.5)",
    paddingTop:5,
    paddingBottom:5,
    overflowX:"hidden"
    },
    text:{
        letterSpacing:5,
        fontWeight:600,
        // animation: "$animatedText infinite 20s linear",
    },
    "@keyframes animatedText":{
        "0%":{
            transform: "translateX(-100%)"

        },
        "100%":{
            transform: "translateX(100%)"
            
        }
    }
}))

const SlidingText = ({text}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Typography variant="h6" align="center" className={classes.text}>
                {text}
            </Typography>
        </div>
    )
}

export default SlidingText;