import axios from "axios";
import Employee from "../../components/Employees/Employee";
import Employees from "../../components/Employees/Employees";
//import { makeServer } from "../../server";


export const getEmployees = () => {
  console.log('stating function')
  return (dispactch, getState) => {
    console.log('making call')
    axios
      .get("/api/employees")
      .then((res) => {
        console.log('res data',res.data)
        dispactch({
          type: "GET_EMPLOYEES",
          data:res.data.employees,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}