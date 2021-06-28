import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenuCss.css";
import { Hidden } from "@material-ui/core";
import history from "src/Util/history";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginLeft: 20,
    position: "relative",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: 400,
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
  btn: {
    marginLeft: 20,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const orderClick = () => {
    history.push("/form");
    handleClose();
  };
  return (
    <>
      <Hidden smUp>
        <Menu right isOpen={open} onOpen={handleOpen} onClose={handleClose}>
          <NavLink
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
            onClick={handleClose}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={classes.link}
            activeClassName={classes.activeLink}
            style={{ marginTop: 10 }}
            onClick={handleClose}
          >
            Gallery
          </NavLink>
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            style={{ marginTop: 20 }}
            onClick={orderClick}
          >
            Place Order
          </Button>
        </Menu>
      </Hidden>
      <div className={clsx(classes.root, "center")}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h4">Kurta Castle</Typography>
          <Hidden xsDown>
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
                variant="contained"
                className={classes.btn}
                onClick={orderClick}
              >
                Place Order
              </Button>
            </div>
          </Hidden>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
