import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    width: 300,
    margin: 5,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = React.useCallback((event, { photo, index }) => {
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
        <Typography variant="h4" style={{marginBottom:20}}>Our Best Collections</Typography>
        <div>
          <ReactGallery photos={data} onClick={openLightbox} />
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
