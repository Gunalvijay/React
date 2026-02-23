import React, {useState, useMemo} from "react";

function Examples(){
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([1,2,3,4]);

    function showMax(){
        console.log("Changing max")
        return Math.max(...arr);
    }

    const memVal = useMemo(() => showMax(), [arr])

    return(<>
        <button onClick={() => setCount(count+1)}>Add Count</button>
        <button onClick={() => setArr([...arr, Math.round(count * Math.random())] )}>Add Count</button>
        <p>{JSON.stringify(arr)}</p>
        <p>{memVal}</p>
        <p>{count}</p>
    </>)
}

export default Examples;