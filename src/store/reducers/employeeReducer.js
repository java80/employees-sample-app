const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return action.data
    default:
      return state
  }
  
}
export default employeeReducer