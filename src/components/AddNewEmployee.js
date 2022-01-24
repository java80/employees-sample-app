import React from "react";
import { TextField, Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Avatar from "material-ui/Avatar/Avatar";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/actions/employeeActions";
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
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    phone: "",
    avatar: Avatar,
    city: "",
    state: "",
    streetAddress: "",
    zipCode: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("show employe", employee);
    dispatch(addEmployee(employee));
    setEmployee({
      firstName: "",
      lastName: "",
      bio: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      streetAddress: "",
      zipCode: "",
    });
  };
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="firstName"
            variant="outlined"
            label="Enter First Name"
            value={employee.firstName || ""}
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
          />
          <TextField
            id="lastName"
            variant="outlined"
            label="Enter Last Name"
            value={employee.lastName || ""}
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Bio"
            id="bio"
            style={{ width: 382, height: 100 }}
            value={employee.bio || ""}
            onChange={(e) => setEmployee({ ...employee, bio: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="email"
            variant="outlined"
            label="Enter employee's email"
            value={employee.email || ""}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
          <TextField
            id="phone"
            variant="outlined"
            label="phone"
            value={employee.phone || ""}
            onChange={(e) =>
              setEmployee({ ...employee, phone: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            id="streetAddress"
            variant="outlined"
            label="Address"
            value={employee.streetAddress || ""}
            onChange={(e) =>
              setEmployee({ ...employee, streetAddress: e.target.value })
            }
          />
          <TextField
            id="city"
            variant="outlined"
            label="City"
            value={employee.city || ""}
            onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="state"
            variant="outlined"
            label="State"
            value={employee.state || ""}
            onChange={(e) =>
              setEmployee({ ...employee, state: e.target.value })
            }
          />
          <TextField
            id="zipCode"
            variant="outlined"
            label="Zip Code"
            value={employee.zipCode || ""}
            onChange={(e) =>
              setEmployee({ ...employee, zipCode: e.target.value })
            }
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          className={classes.addButton}
          type="submit"
        >
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
