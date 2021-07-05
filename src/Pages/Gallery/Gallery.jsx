import React, {useState, useEffect} from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

import data from "./data";
import clsx from "clsx";
import CustomGallery from "src/Components/CustomGallery/CustomGallery";
import { firestore } from "src/Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
}));

const Gallery = () => {
  var [images,setImages] = useState([]);
  useEffect(() => {
    var gallery = []
    var fetchImages = async () => {
      var query = await firestore.collection("images").get();
      query.docs.forEach(doc => {
        gallery.push(doc.data())
      })
      setImages(gallery)
    }
    fetchImages()
  },[])
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
          <CustomGallery data={images} />
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
