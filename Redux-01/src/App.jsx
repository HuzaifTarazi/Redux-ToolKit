import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incremenet, incrementByAmount, reset } from "./feature/counter/counterSlice";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(incremenet());
        }}
      >
        Increase
      </button>
      <h1>{count}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      /> <br /><br />

      <button onClick={()=>{dispatch(incrementByAmount(Number(inputValue)))}}>Increment by Amount</button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </>
  );
};

export default App;
