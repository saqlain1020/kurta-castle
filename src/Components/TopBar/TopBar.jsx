import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import clsx from 'clsx'

const useStyles = makeStyles((theme)=>({
    root:{
        height: 50,
        background: "black",
        color: "white",
    },
    text:{
        color:"white",
        fontWeight:600,
        fontSize:12,
        letterSpacing:2,
    }
}))

const TopBar = () => {
    const classes = useStyles();
    
    return (
        <div className={clsx(classes.root,"center")}>
            <Typography align="center" className={classes.text}>
                FREE DELIVERY FOR ORDERS ABOVE 2500 Rs <br/>
                APPLICABLE IN KARACHI
            </Typography>
        </div>
    )
}

export default TopBar;