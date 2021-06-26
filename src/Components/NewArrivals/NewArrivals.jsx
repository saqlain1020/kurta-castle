import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import K1 from "src/Assets/images/kurta1.jpg";
import K2 from "src/Assets/images/kurta2.jpg";
import K3 from "src/Assets/images/kurta3.jpg";
import K4 from "src/Assets/images/kurta4.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
}));

const NewArrivals = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" className="sectionHeading">
          Our Fine Kurtas
        </Typography>
      </Container>
    </div>
  );
};

export default NewArrivals;
