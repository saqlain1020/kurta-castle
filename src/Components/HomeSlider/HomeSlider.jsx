import React from "react";
import { makeStyles } from "@material-ui/core";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles.js";
import Img1 from "src/Assets/images/1.jpg";
import Img2 from "src/Assets/images/2.jpg";
import Img3 from "src/Assets/images/3.jpg";
import Img4 from "src/Assets/images/4.jpg";
import Img5 from "src/Assets/images/5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  root: {  
paddingTop:20,
background:theme.palette.primary.main

   },
  imgDiv: {
    height: "calc(100vh - 130px)",
    backgroundSize: "cover",
    width: "100%",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

const HomeSlider = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel autoPlay stopOnHover={false} infiniteLoop>
        <div>
          <div
            style={{ backgroundImage: `url(${Img1})` }}
            className={classes.imgDiv}
          />
        </div>

        <div>
          <div
            style={{ backgroundImage: `url(${Img2})` }}
            className={classes.imgDiv}
          />
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${Img3})` }}
            className={classes.imgDiv}
          />
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${Img4})` }}
            className={classes.imgDiv}
          />
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${Img5})` }}
            className={classes.imgDiv}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
