import "./styles.css";
import React, { useState, useEffect } from "react";

function counterReducer(state, action) {
  switch (action) {
    case "RESET":
      return { count: 0 };
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      throw new Error("action not found");
  }
  return state;
}

function Counter() {
  // const [count, setCount] = React.useState();
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch("INC")}>Inc</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("DEC")}>Desc</button>
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
