import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import FaceIcon from "@mui/icons-material/Face";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import "./Employee.css";

const useStyles = makeStyles({
  employeeStyle: {
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-evenly",
  },
  employeeTitle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
});

const Employee = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <div className={classes.employeeStyle}>
      {/* <h2>Employee</h2> */}
      <div className="employee-data">
        <div className="employee-column-title">
          <Typography variant="subtitle1">First Name: </Typography>
          <Typography variant="subtitle1">Last Name: </Typography>

          <Typography>Avatar:</Typography>
        </div>
        <div className="employee-column-data">
          <Typography variant="subtitle1">{data.firstName} </Typography>
          <Typography variant="subtitle1">{data.lastName} </Typography>

          <Typography variant="subtitle1">
            <img
              src={data.avatar}
              alt={data.firstName + ` ${data.lastName} avatar`}
              className={classes.avatar}
            />
          </Typography>
        </div>
        <div className="employee-show-more-row">
          <div className="employee-show-more-title">
            <Typography variant="body2">Bio:</Typography>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="subtitle1">Phone</Typography>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="subtitle1">City:</Typography>
            <Typography variant="subtitle1">State:</Typography>
            <Typography variant="subtitle1">Zip:</Typography>
          </div>
          <div className="employee-show-more-data">
            <Typography variant="subtitle1">{data.bio}</Typography>
            <Typography variant="subtitle1">{data.email}</Typography>
            <Typography variant="subtitle1">{data.phone}</Typography>
            <Typography variant="subtitle1">
              {data.address.streetAddress}
            </Typography>
            <Typography variant="subtitle1">{data.address.city}</Typography>
            <Typography variant="subtitle1"> {data.address.state}</Typography>
            <Typography variant="subtitle1"> {data.address.zipCode}</Typography>
          </div>
        </div>
      </div>
      <div>
        <ButtonGroup size="medium" aria-label="outlined primary button group">
          <Button color="primary">
            <ExpandMoreIcon />
          </Button>
          <Button>
            <EditIcon />
          </Button>
          <Button color="secondary">
            <DeleteForeverIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Employee;
