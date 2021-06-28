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
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  heading: {
    fontWeight: 700,
    fontFamily: "'Noto Serif', serif",
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      // fontSize:35
      textAlign: "left",
    },
  },
  img: {
    marginTop: 20,
    boxShadow: "0 6px 30px 0 rgb(212 175 55 / 20%)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  img2: {
    marginTop: 50,
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
  rightSection: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
      flexFlow: "column-reverse",
    },
  },
  rightPara: {
    textAlign: "left",
    maxWidth: "80%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginTop: 20,
      textAlign: "left",
    },
  },
}));

const NewArrivals2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Fade>

            <img src={K3} width="100%" alt="" className={classes.img2} />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in
              saepe numquam fuga nihil nam excepturi veritatis, quos qui ullam
              similique provident ipsum minus nisi voluptate quia molestias,
              tempore sequi? Enim, ducimus, unde repellendus dolor veritatis
              quos quidem dolorem earum reprehenderit, ut fugiat inventore
              voluptate eaque rerum neque ea et maiores distinctio maxime
              architecto ipsa hic! Eum nam repellat doloremque.
            </Typography>
            </Fade>
            {/* <Button
              color="primary"
              variant="outlined"
              className={classes.seeBtn}
            >
              See more...
            </Button> */}
          </Grid>
          <Grid item xs={12} sm={7} className={classes.rightSection}>
            {/* <Typography variant="h3" className={clsx("sectionHeading",classes.heading)} align="right">
              Our Fire Collection
            </Typography> */}

            <Typography className={classes.rightPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem libero natus quod cupiditate quo sapiente, vero
              distinctio delectus accusamus architecto atque, magni vel maxime
              corporis beatae rerum, id inventore perspiciatis? Tempora libero
              perferendis quisquam, ratione suscipit, perspiciatis quibusdam
              officiis architecto possimus reiciendis repellendus rem asperiores
              laborum quaerat eos veritatis ut nesciunt. Voluptas maxime eveniet
              quia dicta laudantium iusto molestiae eos.
            </Typography>
            <Fade>
            <img src={K4} width="80%" alt="" className={classes.img} />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewArrivals2;
