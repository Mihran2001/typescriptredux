import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const value = useSelector(function (state: any) {
    return state.value;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1> {value} </h1>
      <input
        onChange={(e) => dispatch({ type: "addInput", value: e.target.value })}
      />
    </>
  );
}

export default App;
