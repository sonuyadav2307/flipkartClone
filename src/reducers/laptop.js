import laptopData from "./laptopData";

const laptopReducer = (state = laptopData, action) => {
  switch (action.type) {
    case "REMOVE_FILTER":
    default:
      return state;
  }
};
export default laptopReducer;
