import React from 'react'
import { memo } from 'react'
import { useState } from 'react'


function MemoizedEx() {
  console.log("component rendered ")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
  return (<>
    <form action="">
        <fieldset>
        <input type="text" name="firstName" id="firstName" value={firstName} placeholder="enter first name"  onChange={(e)=>setFirstName(e.target.value)} autoComplete="off"/>
       <input type="text" name="lastName" id="lastName" value={lastName} placeholder="enter last name"  onChange={(e)=>setLastName(e.target.value)} autoComplete="off" />
        </fieldset>
     
    </form>
       <Greeting name={firstName}/>
       </>)
}

const Greeting=memo(({name})=>{
  console.log("greet  rendered")
    return <h1>hello {name}!</h1>

})

export default MemoizedEx