import { useState, useCallback } from "react";

function Parent(){

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return(
    <div>
      <button onClick={() => setCount(count+1)}>
        Count {count}
      </button>

      <Child onClick={handleClick}/>
    </div>
  );
}

function Child({onClick}){
  console.log("Child Rendered");

  return(
    <button onClick={onClick}>
      Child Button
    </button>
  );
}

export default Parent;