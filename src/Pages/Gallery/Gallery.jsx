import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

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
        <div style={{ marginTop: 40, marginBottom: 50 }}>
          <CustomGallery data={data} />
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
