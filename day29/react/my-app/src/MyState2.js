import React from 'react'
import {useState} from 'react'
const MyState2 = () => {
    const [count,setCount]=useState(0)
    const increament=()=>{
        setCount(count+1)
    }
    const decreament=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Using useState Hook</h1>
      <button onClick={increament}>increament</button>
        <span>{count}</span>
        <button onClick={decreament}>decreament</button>
    </div>
  )
}

export default MyState2
