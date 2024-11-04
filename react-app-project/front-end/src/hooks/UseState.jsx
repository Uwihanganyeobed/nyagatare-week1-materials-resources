import React, { useContext, useState } from 'react'
import { ItemContext } from '../context/ItemContext';

export default function UseState() {
   const[count, setCount]=useState(0);
   const {text}=useContext(ItemContext);

  return (
    <div>
      New Context from mother is {text}
      <p style={{fontSize: 30}}>{count}{count === 5 && alert("Hello Please stop!!") }</p>
      <button style={{backgroundColor: 'blue'}} onClick={()=>setCount(count+1)}>Increment</button>
      {/* <button style={{backgroundColor: 'red'}} onClick={()=>setCount(count-1)}>Decrement</button>
      <button style={{backgroundColor: 'yellowgreen'}} onClick={()=>setCount(0)}>Reset</button> */}
    </div>
  )
}
