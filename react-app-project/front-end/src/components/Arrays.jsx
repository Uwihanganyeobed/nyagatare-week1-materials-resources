import React from 'react';

// conditionals
export default function Arrays() {
   const cars = ["BMW", "BENZ", "TOYOTA", "HONDA", "HYUNDAI"];
   
   return (
      <div>
         <h2>Car Brands</h2> 
         <ol>
         {cars.map((car, index) => (
            <li key={index}>{car}</li>
         ))}
         </ol>
         {cars.length >0 ? <p>The length is {cars.length}</p>:<p>No array</p>}
      </div>
   );
}
