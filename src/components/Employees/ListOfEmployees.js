import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Employee from "./Employee";
import { getEmployees } from "../../store/actions/employeeActions";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <div className={classes.employeesStyle}>
      <div className={classes.headingStyle}>
        <Typography variant="subtitle1" mr={{ mr: 2 }}>
          Employees
        </Typography>
        <Typography>
          <Button variant="contained">Expand All </Button>
        </Typography>
      </div>
      {state.employees.map((data, index) => {
        return <Employee key={index} data={data} />;
      })}
    </div>
  );
};

export default ListOfEmployeess;
