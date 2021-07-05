import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  heading: {},
  imageWrapper: {
    height: 350,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    position: "relative",
    "& img": {
      objectFit: "cover",
      objectPosition: "top",
      borderRadius: 5,
      transition: "all 200ms ease-in-out",
    },
    "&:hover": {
      "& > div > img": {
        transform: "scale(1.2)",
      },
    },
  },
  blurImage: {
    position: "absolute",
    borderRadius: 5,
    filter: "blur(12px)",
    top: 12,
    opacity: 0.5,
    left: 0,
    zIndex: -1,
  },
}));

const CustomGallery = ({ data }) => {
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
    <div>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3}>
            <div className={classes.imageWrapper}>
              <img
                src={item.src}
                width="100%"
                height="100%"
                className={classes.blurImage}
                alt="kurta"
              />
              <div
                style={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: 5,
                }}
              >
                <img
                  src={item.url}
                  width="100%"
                  height="100%"
                  onClick={() => openLightbox(index)}
                  alt="kurta"
                />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
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
  );
};

export default CustomGallery;

CustomGallery.propTypes = {
  data: PropTypes.array,
};

CustomGallery.defaultProps = {
  data: [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    },
  ],
};
