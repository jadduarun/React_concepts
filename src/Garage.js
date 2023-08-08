import React, { useEffect, useState } from "react";

function Garage() {
  let [count, setCount] = useState(0);

  function decrementValue(){
    setCount(count - 1);
  }
  function incrementValue(){
    setCount(count+1);
  };
  return (
    <div>
      <button onClick={incrementValue}>+</button>
      <p>{count}</p>
      <button onClick={decrementValue}>-</button>
    </div>
  );
}

export default Garage;
