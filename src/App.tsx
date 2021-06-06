import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserState } from "./features/currentUser/currentUserSlice";
import { editName } from "./features/currentUser/currentUserSlice";

function App() {
  const name = useSelector(currentUserState);
  const dispatch = useDispatch();
  console.log(name);
  return (
    <>
      <h1> {name} </h1>
      <input onChange={(e) => dispatch(editName(e.target.value))} />

      <input
        onChange={(e) => dispatch({ type: "add-todo", value: e.target.value })}
      />
    </>
  );
}

export default App;
