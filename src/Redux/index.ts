import { createStore } from "redux";

const reducer = (state: any, action: any) => {
  if (action.type === "addInput") {
    return {
      // ...state,
      value: action.value,
    };
  }
  return state;
};

export const state = createStore(reducer, { value: "John Doe" });
