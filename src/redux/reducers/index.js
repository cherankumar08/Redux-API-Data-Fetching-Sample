// Importing combineReducers from redux for combining all the reducers
import { combineReducers } from "redux";
// Importing the ProductReducers to combine
import { ProductReducers } from "./ProductReducers";

// Setting the name for the combined reducers as 'reducers'
const reducers = combineReducers({
  // Key : Reducers
  allProducts: ProductReducers,
});

// Exporting the combined reducers
export default reducers;
