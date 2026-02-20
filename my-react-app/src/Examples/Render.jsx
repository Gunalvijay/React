/*

Mount

First time component shows.

Render

Component function runs.

Re-render

Component function runs again.

*/


import { useState } from "react";

function Demo() {

  console.log("Rendered");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click
      </button>

    </div>
  );
}

export default Demo;