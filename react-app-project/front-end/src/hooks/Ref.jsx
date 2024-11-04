import  { useContext } from 'react'
import { ItemContext } from '../context/ItemContext';

export default function Ref() {
   const {text,setText}= useContext(ItemContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={()=>setText("Hello Vargas")}>Click</button>
    </div>
  )
}
