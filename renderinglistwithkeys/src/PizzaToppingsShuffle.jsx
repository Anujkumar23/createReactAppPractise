import React,{useState,useEffect} from 'react'


const pizzaTopping=[
    {id:"a",topping:"onion"},
    {id:"b",topping:"capcicum"},
    {id:"c",topping:"paneer"},
    {id:"d",topping:"jalopeno"},
   
]


function shuffle(originalArray){
    const shuffleArray=[...originalArray]
    for(let index=shuffleArray.length-1;index>0;index--){
        let randomIndex= Math.floor(Math.random()*(index+1));
        [shuffleArray[index],shuffleArray[randomIndex]]=[shuffleArray[randomIndex],shuffleArray[index]];
    }
    return shuffleArray;
}


function PizzaToppingsShuffle() {
   const [toppings, setToppings] = useState(pizzaTopping)

    function removeTopping(topping){
        setToppings(toppings.filter((i)=>i!==topping));
    }

    useEffect(() => {
    const interval=setInterval(()=>{
        setToppings(shuffle(toppings))
    },2000)


  return () => {
    clearInterval(interval)
  }
}, [])

    
  return(<ul>
    {toppings.map((item)=>(<li key={item.id}>
       
        <input type="text"  value={item.topping} />
        <button onClick={()=>removeTopping(item)}>X</button>
       

    </li>)
    )}
  </ul>)
   
}

export default PizzaToppingsShuffle