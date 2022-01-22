import React from "react";
import { TextField, Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #00000",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    margin: "25px",
    marginLeft: "20px",
  },
});

const AddNewEmployee = () => {
  const classes = useStyles();
  useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <form noValidate autoComplete="off" className={classes.formStyle}>
        <div>
          <TextField
            id="firstName"
            variant="outlined"
            label="Enter First Name"
          />
          <TextField id="lastName" variant="outlined" label="Enter Last Name" />
        </div>
        <div>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Bio"
            style={{ width: 382, height: 100 }}
          />
        </div>
        <div>
          <TextField
            id="email"
            variant="outlined"
            label="Enter employee's email"
          />
          <TextField id="phone" variant="outlined" label="phone" />
        </div>
        <div>
          <TextField id="Address" variant="outlined" label="Address" />
          <TextField id="City" variant="outlined" label="City" />
        </div>
        <div>
          <TextField id="State" variant="outlined" label="State" />
          <TextField id="ZipCode" variant="outlined" label="Zip Code" />
        </div>

        <Button
          color="primary"
          variant="contained"
          className={classes.addButton}
        >
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
