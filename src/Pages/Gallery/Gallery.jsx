import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Img1 from "src/Assets/images/1.jpg";
import Img2 from "src/Assets/images/2.jpg";
import Img3 from "src/Assets/images/3.jpg";
import Img4 from "src/Assets/images/4.jpg";
import Img5 from "src/Assets/images/5.jpg";
import ReactGallery from "react-photo-gallery";
import data from "./data";
import clsx from "clsx";
import CustomGallery from "src/Components/CustomGallery/CustomGallery";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
}));

const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          className={clsx("sectionHeading", classes.heading)}
        >
          Our Best Collections
        </Typography>
        <div style={{ marginTop: 40 ,marginBottom:50,}}>
          <CustomGallery data={data}/>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
