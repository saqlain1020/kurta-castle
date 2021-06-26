import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery as GallerySwipe, Item } from "react-photoswipe-gallery";
import { Container } from "@material-ui/core";
import Img1 from "src/Assets/images/1.jpg";
import Img2 from "src/Assets/images/2.jpg";
import Img3 from "src/Assets/images/3.jpg";
import Img4 from "src/Assets/images/4.jpg";
import Img5 from "src/Assets/images/5.jpg";
import ReactGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import data from "./data";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  img: {
    width: 300,
    margin: 5,
  },
  heading: {},
}));

const Gallery = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = React.useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          className={clsx("sectionHeading", classes.heading)}
        >
          Our Best Collections
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={6} sm={4} md={3}>
                <img
                  src={item.src}
                  width="100%"
                  height="300px"
                  onClick={() => openLightbox(index)}
                />
              </Grid>
            ))}
          </Grid>
          {/* <ReactGallery photos={data} onClick={openLightbox} /> */}
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={data.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
