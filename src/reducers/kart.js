const kartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, [action.payload.items.id]: action.payload.items };

    case "REMOVE_KART":
      let ob = action.payload;
      let kv = Object.values(state);
      let pv;
      kv.forEach((x) => {
        if (x.id !== ob.id) {
          pv = { ...pv, [x.id]: x };
        }
      });
      if (pv === undefined) {
        return [];
      } else {
        return pv;
      }
    default:
      return state;
  }
};

export default kartReducer;
