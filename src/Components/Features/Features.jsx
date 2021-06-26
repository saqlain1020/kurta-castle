import React from "react";
import { Container, makeStyles, Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    background: "rgb(212,175,55,0.05)",
    paddingBottom: 20,
    marginTop: 50,
  },
  card: {
    padding: 20,
    margin: 10,
    // boxShadow: "0 1px 4px 0 rgb(212 175 55 / 40%)",
    background: "white",
    transition: "all .3s ease",
    borderRadius: 10,
    display: "flex",
    "&:hover": {
      boxShadow: "0 15px 50px 0 rgb(212 175 55 / 20%)",
    },
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  container: {
    // background: "rgb(212,175,55,0.05)",
  },
  para: {
    fontSize: 14  ,
    fontWeight:500,
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" className="sectionHeading">
          Our Fine Kurtas
        </Typography>
      </Container>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <Grid container spacing={1} style={{ marginTop: 20 }}>
            <Grid item xs={12} sm={4}>
              <div className={classes.card}>
                <AcUnitIcon className={classes.icon} />
                <div>
                  <Typography color="textPrimary">
                    <b>Easy To Wear and unwear :)</b>
                  </Typography>
                  <Typography className={classes.para}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reici
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.card}>
                <AcUnitIcon className={classes.icon} />
                <div>
                  <Typography color="textPrimary">
                    <b>Easy To Wear and unwear :)</b>
                  </Typography>
                  <Typography className={classes.para}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reici
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.card}>
                <AcUnitIcon className={classes.icon} />
                <div>
                  <Typography color="textPrimary">
                    <b>Easy To Wear and unwear :)</b>
                  </Typography>
                  <Typography className={classes.para}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reici
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Features;
