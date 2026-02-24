import { useState } from "react";

function ReactMemo() {

  const [count, setCount] = useState(0);
  console.log("Parent Rendered");

  return (
    
    <div>

      <button onClick={() => setCount(count+1)}>
        Count {count}
      </button>

      <Child />

    </div>
  );
}

function Child(){
  console.log("Child Rendered");

  return <h1>Child Component</h1>;
}

export default ReactMemo;