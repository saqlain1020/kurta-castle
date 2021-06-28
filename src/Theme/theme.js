import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d4af37",
    },
    text: {
      light: "#333333",
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {
    MuiTypography: {
      root: {
        color: "rgba(0,0,0,.45)",
      },
      h1: {
        color: "#333333",
      },
      h2: {
        color: "#333333",
      },
      h3: {
        color: "#333333",
      },
      h4: {
        color: "#333333",
      },
      colorTextSecondary: {
        color: "inherit",
      },
    },
    MuiLinearProgress: {
      root: {
        height: 10,
        boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
      },
    },
    MuiOutlinedInput: {
      root: {
        // background: "white",
        // borderRadius: 7,
        "& fieldset": {
          // borderWidth: "0px !important",
          borderColor: "rgba(0,0,0,0.1)",
          borderColor: "rgba(233,215,155,0.5)",
        },
        "&:hover > fieldset": {
          // borderWidth: "0px !important",
          borderColor: "rgba(233,215,155,1) !important",
        },
      },
      notchedOutline: {
        boxShadow: "0 4px 5px rgba(233,215,155,.4)",
      },
    },
    MuiButton: {
      containedPrimary: {
        color: "white",
        borderRadius: 360,
      },
    },
  },
});

export default theme;
