import React from 'react'

const SecondProp = (props) => {
    const {name, model, price} = props.newCar;
  return (
    <div>
            <br />
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Name: {name}</p>
    </div>
  )
}

export default SecondProp
