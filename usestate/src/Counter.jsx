import React from 'react'
import {useState} from "react"

function Counter() {
let [count, setCount] = useState(0);
  
const handleClick=()=>{
    setCount((prevCount)=>prevCount+4);
    // setCount((prevCount)=>prevCount+1);
    // setCount((prevCount)=>prevCount+1);
    // setCount((prevCount)=>prevCount+1);
    console.log(count);
}

  return (
    <div>
    <button onClick={handleClick}>Count:{count}</button>
        </div>
  )
}

export default Counter