import React from "react";
import { loadCurrentUser } from "./currentUserAPI";

export const currentUserReducer = (state: any = {}, action: any) => {
  if (action.type === "addInput") {
    return {
      name: action.value,
    };
  }
  return state;
};

export const initialCurrentUser = {
  name: "John Doe",
};

export const currentUserState = (state: any) => {
  return state.currentUser.name;
};

export const editName = (newName: any) => {
  return {
    type: "addInput",
    value: newName,
  };
};

// export const loadUser = async () => {
//   return async (dispactch: any, getState: any) => {
//     const timeOutFunc = loadCurrentUser();
//     return timeOutFunc();
//   };
// };
