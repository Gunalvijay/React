import React from "react";
import { useState } from "react";

function ReactMemo1() {

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


const Child = React.memo(function Child(){

  console.log("Child Rendered");

  return <h1>Child Component</h1>;

});

export default ReactMemo1;