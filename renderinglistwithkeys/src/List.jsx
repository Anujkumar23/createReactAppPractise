import React, { useState } from 'react'

function List() {
  
    const getItems=()=>{
        console.log("getItems called")
        return Array(50).fill(0)
    }
// initializer function
    // const [items, setItems] = useState(getItems()) 
    const [items, setItems] = useState(getItems)
   
  return (
    <div>
        <ul>
         {items.map((item,index)=><li key={index}>{index+1}</li>)}
        </ul>
        <button onClick={()=>setItems([...items,0])}>Add item</button>
        
    </div>
    
  )
}

export default List