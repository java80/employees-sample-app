import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// User Defined component imports

import Employees from "./components/Employees/Employees";
import Navbar from "./components/Navbar/Navbar";

import { makeServer } from "./server";
import ListOfEmployess from "./components/Employees/ListOfEmployees";
import AddNewEmployee from "./components/AddNewEmployee";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const useStyles = makeStyles({
  boxContent: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      {/* <header>
        <h1>Employees</h1>
      </header> */}
      <BrowserRouter>
        <Container>
          <Navbar />
          <Container className={classes.boxContent} maxWidth="md">
            <Routes path="/" component={Employees} />
            <AddNewEmployee />
            <ListOfEmployess />
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
