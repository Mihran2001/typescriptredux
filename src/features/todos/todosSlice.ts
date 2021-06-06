import React from "react";

export const todosReducer = (state: any = [], action: any) => {
  if (action.type === "add-todo") {
    return state;
  }
  return state;
};

export const todosContent = [
  { id: Math.random(), text: "Learn Js", isComplated: false },
  { id: Math.random(), text: "Learn Sass", isComplated: false },
  { id: Math.random(), text: "Learn Less", isComplated: false },
];
