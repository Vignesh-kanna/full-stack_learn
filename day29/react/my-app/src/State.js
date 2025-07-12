import React from 'react'
import { useState } from 'react'
const State = () => {
  const [count,setCount] = useState(0);
  return (
    <div className='mt-5'>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Increment</button>
      <spam>{count}</spam>
      <button className='btn btn-danger' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default State
