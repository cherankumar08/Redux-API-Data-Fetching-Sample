import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

// Creating the Redux store using configureStore from @reduxjs/toolkit
const store = configureStore({
  reducer: reducers,
});

export default store;
