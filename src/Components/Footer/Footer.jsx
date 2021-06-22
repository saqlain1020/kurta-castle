import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222",
    color: "rgba(255,255,255,0.9)",
    paddingTop: 50,
    paddingBottom: 50,
  },
  heading: {
    color: "inherit",
    marginBottom: 20,
  },
  iconBtn: {
    color: "inherit",
  },
  icon: {
    fontSize: 35,
  },
  link:{
    color: "inherit",
    textDecoration: "none",
    marginBottom:15,
  },
  linkContainer:{
      display:"flex",
      flexFlow: "column",
      paddingTop:10,
      alignItems:"flex-start"
  },
  
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h4" className={classes.heading}>
                Kurta Castle
              </Typography>
              <div>
                <IconButton className={classes.iconBtn}>
                  <i className={clsx("fab fa-facebook-f", classes.icon)}></i>
                </IconButton>
                <IconButton className={classes.iconBtn}>
                  <i className={clsx("fab fa-instagram", classes.icon)}></i>
                </IconButton>
                <IconButton className={classes.iconBtn}>
                  <i
                    className={clsx("fab fa-snapchat-ghost", classes.icon)}
                  ></i>
                </IconButton>
                <IconButton className={classes.iconBtn}>
                  <i className={clsx("fas fa-phone", classes.icon)}></i>
                </IconButton>
                <IconButton className={classes.iconBtn}>
                  <i className={clsx("far fa-envelope", classes.icon)}></i>
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.linkContainer}>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/gallery" className={classes.link}>Gallery</Link>
              <Link to="/place-order" className={classes.link}>Place Order</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="textSecondary" style={{marginBottom:10,}}> <b>About</b></Typography>
              <Typography color="textSecondary">
                  We are very good at what we do so you should trust us at what we do...
              </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
