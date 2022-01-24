import React, { useState } from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import "./Employee.css";
import useCollapse from "react-collapsed";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getEmployees } from "../../store/actions/employeeActions";
import Avatar from "../../avatar.png";

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
  buttonStyle: {
    cursor: "pointer",
  },
});

const Employee = ({ data }) => {
  const dispatch = useDispatch();
  const deleteEmployee = () => {
    axios
      .delete("/api/employees/" + data.id)
      .then(() => {
        dispatch(getEmployees());
      })
      .catch((err) => console.log(err));
  };

  console.log(data);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  const onClickEachExpandButton = () => {
    setExpanded(!isExpanded);
  };
  const classes = useStyles();
  return (
    <div className={classes.employeeStyle}>
      {/* <h2>Employee</h2> */}
      <div className="employee-data">
        <div
          style={{ width: isExpanded ? "70%" : "120%" }}
          className="employee-column-title"
        >
          <Typography variant="subtitle1">First Name: </Typography>
          <Typography variant="subtitle1">Last Name: </Typography>
          <Typography>Avatar:</Typography>
        </div>
        <div
          style={{ width: isExpanded ? "70%" : "120%" }}
          className="employee-column-title"
        >
          <Typography variant="subtitle1">{data.firstName} </Typography>
          <Typography variant="subtitle1">{data.lastName} </Typography>

          <Typography variant="subtitle1">
            <img
              style={{ height: 35 }}
              src={data.avatar ? data.avatar : Avatar}
              alt={data.firstName + ` ${data.lastName} avatar`}
              className={classes.avatar}
            />
          </Typography>
        </div>
        <div className="employee-show-more-row" {...getCollapseProps()}>
          <div className="employee-show-more-title">
            <div className="row">
              <Typography variant="subtitle1">Bio:</Typography>
              <Typography variant="subtitle1">{data.bio}</Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">Email:</Typography>
              <Typography variant="subtitle1">{data.email}</Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">Phone</Typography>
              <Typography variant="subtitle1">{data.phone}</Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">Address:</Typography>
              <Typography variant="subtitle1">
                {data.address.streetAddress}
              </Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">City:</Typography>
              <Typography variant="subtitle1">{data.address.city}</Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">State:</Typography>
              <Typography variant="subtitle1"> {data.address.state}</Typography>
            </div>

            <div className="row">
              <Typography variant="subtitle1">Zip:</Typography>
              <Typography variant="subtitle1">
                {" "}
                {data.address.zipCode}
              </Typography>
            </div>
          </div>
          <div className="employee-show-more-data"></div>
        </div>
      </div>
      <div>
        <ButtonGroup size="medium" aria-label="outlined primary button group">
          <Button
            color="primary"
            className={classes.buttonStyle}
            {...getToggleProps({ onClick: onClickEachExpandButton })}
          >
            {/* <ExpandMoreIcon /> */}
            {isExpanded ? "Collapse" : "More"}{" "}
          </Button>
          <Button>
            <EditIcon />
          </Button>
          <Button onClick={deleteEmployee} color="secondary">
            <DeleteForeverIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Employee;
