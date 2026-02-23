import { useState } from "react";

function Parents(){

  const [count, setCount] = useState(0);

  function handleClick(){
    console.log("Clicked");
  }

  return(
    <div>
      <button onClick={() => setCount(count+1)}>
        Count {count}
      </button>

      <Childs onClick={handleClick}/>
    </div>
  );
}

function Childs({onClick}){
  console.log("Child Rendered");

  return(
    <button onClick={onClick}>
      Child Button
    </button>
  );
}

export default Parents;