import React from "react";
import { makeStyles } from "@material-ui/core";
import Background from "src/Assets/images/lines-bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "&::before": {
      content: "''",
      // background: `url(${Background})`,
      opacity: 0.05,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      zIndex: -1,
    },
  },
}));

const Bg = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Bg;
