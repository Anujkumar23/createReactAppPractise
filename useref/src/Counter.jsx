import React, {useRef}from 'react'


function Counter() {
    console.log("component rendered")
    const count=useRef(0);
    function handleClick(){
        count.current=count.current+1;
        console.log("Click count"+ count.current)

    }
  return (<div>
 <button onClick={handleClick}>Click me</button>
    
  </div>
  

  )
}

export default Counter