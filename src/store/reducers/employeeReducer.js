
const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return action.data;
    case "DEL_EMPLOYEE":
      return state.slice(action.data, 1);
    case "UPDATE_EMPLOYEE":
      return action.data;
    case "ADD_EMPLOYEE":
     
      state.push(action.data.employee)
      console.log("show action",state);
      return state

    default:
      return state;
  }
};
export default employeeReducer;
