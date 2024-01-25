import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
    console.log("value is", count);
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter Value:{count}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default Counter;
