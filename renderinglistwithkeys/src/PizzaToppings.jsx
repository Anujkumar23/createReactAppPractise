import React,{useState} from 'react'


const pizzaTopping=[
    {id:"a",topping:"onion"},
    {id:"b",topping:"capcicum"},
    {id:"c",topping:"paneer"},
    {id:"d",topping:"jalopeno"},
   
]

 
function PizzaTopping() {
   const [toppings, setToppings] = useState(pizzaTopping)
    function removeTopping(topping){
        setToppings(toppings.filter((i)=>i!==topping));
    }

    
  return(<ul>
    {toppings.map((item)=>(<li key={item.id}>
        <label htmlFor={item.topping}>{item.topping}</label>
        <input type="text" name={item.topping} id={item.id} defaultValue={item.topping}/>
        <button onClick={()=>removeTopping(item)}>X</button>

    </li>)
    )}
  </ul>)
  
   
}

export default PizzaTopping
