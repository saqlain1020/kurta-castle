import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  container: {
    minHeight: "100vh",
    flexFlow: "column",
  },
}));

const AboutSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={clsx("center", classes.container)}>
          <Typography variant="h2" className="sectionHeading" align="center">
            About Us
          </Typography>
          <Typography align="center" style={{marginTop:50,}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure
            qui tenetur, doloribus nihil natus quibusdam error suscipit, illum
            odio praesentium sit ex reiciendis! Impedit dolore similique nobis
            inventore corporis! Voluptate quisquam dolore vel fuga quia maxime
            quod aliquid! Voluptatibus reprehenderit vel numquam quas odit,
            repellendus, eum, officiis nemo totam architecto maxime culpa quis
            expedita dolorem libero animi reiciendis exercitationem? Placeat
            sunt architecto error quisquam odio vel sint omnis molestiae earum
            quis, perspiciatis, aperiam alias a. Fuga officia porro, cumque aut
            velit illo maxime a, doloremque atque totam voluptatum architecto.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
