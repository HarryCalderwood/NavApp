const authenticationReducer = (state = 0, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return state + 1;
    default:
      return state;
  }
};

export default authenticationReducer;
