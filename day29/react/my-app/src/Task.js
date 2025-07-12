import React from 'react'
import { useState } from 'react'
const Task = (props) => {
    const [count,setCount] = useState(0);
    const { pimg, pname, pdesc, price } = props.newproduct;
  return (
    <div>
        <br/>
        <h1>Product Information:</h1>
        <img src={pimg} alt="Product" style={{width: '200px', height: '200px'}} />
        <p>Name: {pname}</p>
        <p>Description: {pdesc}</p>
        <p>Price: ₹{price}</p>
        <button className='btn btn-success' onClick={()=>setCount(count+1)}>+</button>
      <spam>{count}</spam>
      <button className='btn btn-danger' onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Task
