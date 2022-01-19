import React from 'react';
import { Typography } from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Employee from './Employee';

const useStyles = makeStyles({
  employeesStyle: {
    margin: "20px auto",
    boxShadow: "0px 30px 60px -12px",
    borderRadius: "10px",
    padding:"20px"
  },
});
const ListOfEmployeess = () => {
  const classes = useStyles();
  return (
    <div className={classes.employeesStyle}>
      <Typography>
        <h1>Employees</h1>
      </Typography>
      <Employee />
      <Employee/>
    </div>
  );
};

export default ListOfEmployeess;