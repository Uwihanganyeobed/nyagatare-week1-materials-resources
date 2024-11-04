import React from 'react'

export default function TestProps(props) {
  return (
    <div>
      <p>My name is {props.name} and i am {props.age} years old.</p>
      <ol>
         {props.cars.map((car, index)=>(
            <li key={car.index}>{car}</li>
         ))}
      </ol>
    </div>
  )
}
 