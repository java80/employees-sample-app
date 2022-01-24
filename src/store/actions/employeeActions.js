import axios from "axios";
export const getEmployees = () => {
  console.log("stating function");

  return (dispactch, getState) => {
    console.log("making call");
    axios
      .get("/api/employees")
      .then((res) => {
        console.log("res data", res.data);
        dispactch({
          type: "GET_EMPLOYEES",
          data: res.data.employees,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deleteEmployee = (index) => {
  return { type: "DEL_EMPLOYEES", data: index };
};

export const addEmployee = (employee) => {
  return (dispatch, getState) => {
    let data = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      bio: employee.bio,
      email: employee.email,
      phone: employee.phone,
      address: {
              city: employee.city,
              state: employee.state,
              streetAddress: employee.streetAddress,
              zipCode: employee.zipCode,
      }

    };
    axios.post(`/api/employees`, data)
      .then(res => {
        dispatch({
          type: "ADD_EMPLOYEE",
          data:res.data
      })
      })
      .catch(error => {
      console.log(error.response)
    })
  }
}
