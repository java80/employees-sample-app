import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Employee from "./Employee";

const useStyles = makeStyles({
  employeesStyle: {
    margin: "20px auto",
    boxShadow: "0px 30px 60px -12px",
    borderRadius: "10px",
    padding: "20px",
  },
  headingStyle: {
    color: "#882D17",
    display: "flex",
    justifyContent: "space-between",
    height: "45px",
  },
});
const ListOfEmployeess = () => {
  const classes = useStyles();
  return (
    <div className={classes.employeesStyle}>
      <div className={classes.headingStyle}>
        <Typography>
          <h1 style={{ margin: -4 }}>Employees</h1>
        </Typography>
        <Typography>
          <Button variant="contained">Expand All </Button>
        </Typography>
      </div>
      <Employee />
      <Employee />
    </div>
  );
};

export default ListOfEmployeess;
