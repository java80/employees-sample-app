import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  StyleLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4">
          <Link className={classes.StyleLink} to="/">
            Employees App
          </Link>
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
