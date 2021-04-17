const mapMarkerReducer = (state = 0, action) => {
  switch (action.type) {
    case "LOAD_MARKER_DATA":
      return state + 2;
    default:
      return state;
  }
};

export default mapMarkerReducer;
