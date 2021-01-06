import { combineReducers } from "redux";
import filterReducer from "./filter";
import kartReducer from "./kart";
import laptopReducer from "./laptop";
import phoneReducer from "./phone";
import phoneZoomReducer from "./phoneZoom";
import searchBarReducer from "./searchBar";

const AllReducers = combineReducers({
    
    phone : phoneReducer,
    kart : kartReducer,
    phoneZoom: phoneZoomReducer,
    filter:filterReducer,
    search:searchBarReducer,
    laptop:laptopReducer
    
})


export default AllReducers;
