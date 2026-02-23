import { useState } from "react";

function Example() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  function slowFunction(num){
    console.log("Calculating...");
    return num * 2;
  }

  const result = slowFunction(number);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
      <h2>{result}</h2>
    </div>
  );
}

export default Example;