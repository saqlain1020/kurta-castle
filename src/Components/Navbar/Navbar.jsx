import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginLeft: 20,
    position: "relative",
    textTransform: "uppercase",
    letterSpacing:2,
    fontWeight:400,
    "&:hover": {
      "&::after": {
        width: "100%",
      },
    },
    "&::after": {
      transition: "all 300ms ease-in-out",
      content: "''",
      width: "0%",
      height: 2,
      background: "#d4af37",
      bottom: 0,
      left: 0,
      position: "absolute",
    },
  },
  activeLink: {
    color: "#d4af37",
  },
  btn:{
    marginLeft:20,
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "center")}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4">Kurta Castle</Typography>
        <div>
          <NavLink
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Gallery
          </NavLink>
          <Button
          color="primary"
          variant="contained"  className={classes.btn}>
          Place Order
          </Button>
          {/* <NavLink
            to="/place-order"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Place Order
          </NavLink> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
