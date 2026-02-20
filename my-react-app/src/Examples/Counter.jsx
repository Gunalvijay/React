import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    console.log(count);

    function Increse(){
        setCount(count + 1);
    }

    function Reset(){
        setCount(0);
    }

    function Decrease(){
        setCount(count - 1);
    }

    return(
        <div className="counter">
            <p className="display-count">{count}</p>
            <button onClick={Decrease} className="Inc">Decreament</button>
            <button onClick={Reset} className="Res">Reset</button>
            <button onClick={Increse} className="Dec">Increament</button>
        </div>
    )
}

export default Counter