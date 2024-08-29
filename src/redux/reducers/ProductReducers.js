import { actionTypes } from "../constants/Action_Types";

// Initializing the Values for the state
const initialState = {
  Product: [],
};

// Used to determine the Action based on the type we are passing
export const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
