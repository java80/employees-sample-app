const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return action.data
    case "DEL_EMPLOYEE":
       return state.slice(action.data,1)
    default:
      return state
  }
  
}
export default employeeReducer