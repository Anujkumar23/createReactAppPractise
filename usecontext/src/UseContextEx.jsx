import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {useContext} from 'react'

let userContext=createContext(null)
let themeContext=createContext("dark")

function Foo({user}){
    const theme=useContext(themeContext)
    return <>
    <h2 style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":'white'}}>there  is Hi from Foo component hi {user}</h2>
    <Bar user={user}/>

    </>
}
function Bar( {user}){
    return <>
    <userContext.Provider value="mohit">
    <h3>This is a Bar Component</h3>
    <Baz user={user}/>
    </userContext.Provider>
   
    </>
}
function  Baz(){
    const username = useContext(userContext)
    const theme=useContext(themeContext)
    return <>
    <h4 style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":'white'}} >This is a Baz Component. hi {username}</h4>
    </>
}

export default function useContextEx () {
    let username="Anuj"
    const [theme, setTheme] = useState("light")

  return (
    <div>
        <userContext.Provider value={username}>
            <themeContext.Provider value={theme}>
            <h1>This is Parent component</h1> 
             <Foo user={username} />
            </themeContext.Provider>
            </userContext.Provider>
            <button onClick={()=>setTheme((prev)=>prev==="light"?"dark":"light")}>Toggle Theme</button>
        </div>
  )
}
