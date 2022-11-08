import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UseEffectExample() {
    console.log(" render")

    const [cursorPosition, setCursorPosition] = useState({x:0,y:0})

    useEffect(() => {
        console.log("addevent listener added")

        const handleCursor=(e)=>{
            setCursorPosition({x:e.clientX,y:e.clientY})
            console.log("pointer move event")
           }
        
        window.addEventListener("pointermove",handleCursor)
       
    
      
    }, [])
    

  
      


  return (
        <div>x:{cursorPosition.x},y:{cursorPosition.y}</div>
  )
} 

export default UseEffectExample