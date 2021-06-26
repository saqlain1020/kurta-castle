import React from "react";
import { Container, makeStyles, Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
  },
  card: {
    padding: 30,
    margin: 10,
    boxShadow: "0 1px 4px 0 rgb(212 175 55 / 40%)",
    background: "white",
    transition: "all .3s ease",
    flexFlow: "column",
    borderRadius: 10,
    "&:hover": {
      boxShadow: "0 15px 50px 0 rgb(212 175 55 / 20%)",
    },
  },
  icon: {
    height: 60,
    width: 60,
    marginBottom: 20,
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" className="sectionHeading">
          Our Fine Kurtas
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={4}>
            <div className={clsx("center", classes.card)}>
              <AcUnitIcon className={classes.icon} />
              <Typography color="textPrimary" align="center">
                Easy To Wear and unwear :) <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reici
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className={clsx("center", classes.card)}>
              <AcUnitIcon className={classes.icon} />
              <Typography color="textPrimary" align="center">
                Easy To Wear and unwear :) <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reici
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className={clsx("center", classes.card)}>
              <AcUnitIcon className={classes.icon} />
              <Typography color="textPrimary" align="center">
                Easy To Wear and unwear :) <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reici
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
