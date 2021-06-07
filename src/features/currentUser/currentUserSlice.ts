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

// export function loadUser() {
//   return (dispatch: any, getState: any) => {
//     return loadCurrentUser().then((loadedUser: any) => {
//       dispatch(editName(loadedUser.name));
//     });
//   };
// }

export function loadUser() {
  return async (dispatch: any, getState: any) => {
    const loadedUser = await loadCurrentUser();
    dispatch(editName(loadedUser.name));
  };
}
