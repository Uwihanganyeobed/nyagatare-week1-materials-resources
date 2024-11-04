import React from 'react'
import { useState } from 'react'
export default function TestState() {
   const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}


{/* <div> */}
{/* <Navbar />
<p style={{ color: "red" }}>hello</p>
<Header />
<Table /> 
<Arrays />
<button onClick={toggleClasses}>
  {showClasses ? "Unmount Classes Component" : "Mount Classes Component"}
</button>
{showClasses && <Classes />}
<TestProps name="obed" age={12} cars={["BMW", "BENZ", "MASERATI"]} /> */}
{/* <UseState />
<Effect /> */}
{/* </div> */}