import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import K1 from "src/Assets/images/kurta1.jpg";
import K2 from "src/Assets/images/kurta2.jpg";
import K3 from "src/Assets/images/kurta3.jpg";
import K4 from "src/Assets/images/kurta4.jpg";
import clsx from "clsx";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  heading: {
    fontWeight: 700,
    fontFamily: "'Noto Serif', serif",
    marginBottom: "20px !important",
  },
  img: {
    marginTop: 20,
    boxShadow: "0 6px 30px 0 rgb(212 175 55 / 20%)",
  },
  img2: {
    marginTop: 20,
    boxShadow: "0 0px 20px 0 rgb(212 175 55 / 20%)",
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    marginBottom: 20,
  },
  seeBtn: {
    width: 200,
    height: 50,
    borderWidth: 3,
    marginTop: 20,
    fontWidth: 900,
    letterSpacing: 3,
    borderRadius: 0,
    "&:hover": {
      borderWidth: 3,
    },
  },
}));

const NewArrivals = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h3"
              className={clsx("sectionHeading", classes.heading)}
            >
              Our Collection
            </Typography>
            <Typography style={{ maxWidth: 600 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptatem odio amet accusamus hic deserunt quos id ab adipisci
              ex! Exercitationem aliquam .
            </Typography>
            <Fade>
              <img src={K1} width="80%" alt="" className={classes.img} />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Fade>
              <img src={K2} width="100%" alt="" className={classes.img2} />
            </Fade>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptatem odio amet accusamus hic deserunt quos id ab adipisci
              ex! Exercitationem aliquam eveniet et officiis vitae fugiat
              molestias dolor deserunt.
            </Typography>
            {/* <Button
              color="primary"
              variant="outlined"
              className={classes.seeBtn}
            >
              See more...
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewArrivals;
