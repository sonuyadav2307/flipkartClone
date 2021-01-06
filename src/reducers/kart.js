const kartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, [action.payload.items.id]: action.payload.items };
    default:
      return state;
  }
};

export default kartReducer;
