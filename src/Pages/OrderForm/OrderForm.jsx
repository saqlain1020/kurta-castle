import React from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import KurtaImg from "src/Assets/images/kurta.jpeg";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginBottom: 50,
  },
  form: {
    marginTop: 50,
    display: "flex",
  },
  submitBtn: {
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
}));

const OrderForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    shoulder: "",
    chest: "",
    waist: "",
    hips: "",
    sleeves: "",
    thigh: "",
    calf: "",
    shalwarLength: "",
    kurtaLength: "",
    collar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={clsx("sectionHeading")}>
          Place Order
        </Typography>
        <form
          className={classes.form}
          onChange={handleInput}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Full Name"
                fullWidth
                variant="outlined"
                color="primary"
                value={state.name}
                required
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                color="primary"
                value={state.email}
                required
              />
            </Grid>
            {/* Contact Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="contact"
                label="Contact Number"
                type="tel"
                fullWidth
                variant="outlined"
                color="primary"
                value={state.contact}
                required
              />
            </Grid>
            {/* Address */}
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Shipping Address"
                type="text"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                color="primary"
                required
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                {/* Shoulder */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="shoulder"
                    label="Shoulder Length (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.shoulder}
                    required
                  />
                </Grid>
                {/* Chest */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="chest"
                    label="Chest (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.chest}
                    required
                  />
                </Grid>
                {/* Waist */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="waist"
                    label="Waist (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.waist}
                    required
                  />
                </Grid>
                {/* Hips */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="hips"
                    label="Hips (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.hips}
                    required
                  />
                </Grid>
                {/* Sleeves */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="sleeves"
                    label="Sleeves (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.sleeves}
                    required
                  />
                </Grid>
                {/* Shalwar Length */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="shalwarLength"
                    label="Shalwar Length (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.shalwarLength}
                    required
                  />
                </Grid>
                {/* Thigh */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="thigh"
                    label="Thigh Size (circumference)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.thigh}
                    required
                  />
                </Grid>
                {/* Calf */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="calf"
                    label="Calf Size (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.calf}
                    required
                  />
                </Grid>
                {/* Kurta Length */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="kurtaLength"
                    label="Kurta Length (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.kurtaLength}
                    required
                  />
                </Grid>
                {/* Collar */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="collar"
                    label="Collar Size (in)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={state.collar}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* Image */}
            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <img
                  src={KurtaImg}
                  width="100%"
                  style={{ maxHeight: 360, objectFit: "contain" }}
                  alt="kurta-lengths"
                />
              </Grid>
            </Hidden>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.submitBtn}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          {/* <img src={KurtaImg} height="100%" /> */}
        </form>
      </Container>
    </div>
  );
};

export default OrderForm;
