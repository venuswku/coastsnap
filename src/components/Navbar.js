import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // navlinks: {
  //   marginLeft: theme.spacing(10),
  //   display: "flex",
  // },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  whiteLink: {
    textDecoration: "none",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
  active: {
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid white",
  },
}));

const Navbar = (props) => {
  const { scrollTo } = props;
  const classes = useStyles();
  const location = useLocation();

  const atPath = (path) => {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AppBar position={atPath("/") ? "absolute" : "static"} color={atPath("/") ? "transparent": "primary"} elevation={0}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} onClick={() => scrollTo("")}>
          <Link to="/" className={classes.whiteLink}>CoastSnap</Link>
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/upload" className={classes.link + " " + (atPath("/upload") ? classes.active : "")}>Upload</Link>
          <Link to="/" className={classes.link} onClick={() => scrollTo("about")}>About</Link>
          <Link to="/" className={classes.link} onClick={() => scrollTo("locations")}>Locations</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
