import combineData from "./combineData";

const searchBarReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      let length = action.payload.length;
      let blank = [];
       combineData.map((x) => {
        
        console.log(x.title.substring(0, length))
        console.log(action.payload)
        if (x.title.substring(0, length) === `${action.payload}`) {
           
          blank.push(x.title);
        }
        return blank;
      });
     if (blank.length === combineData.length){
       return []
     }else{
       return blank;

     }
      
    default:
      return state;
  }
};

export default searchBarReducer;
