// Importing the Action types from the constants
import { actionTypes } from "../constants/Action_Types";

// Creating the action types functions for the Three Action Created Previously

// Setting the Products While Selecting
export const SetProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// Selected Products to the Wish List
export const SelectedProducts = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

// Removing the Selected Products from the list
export const RemoveSelected = (products) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};
