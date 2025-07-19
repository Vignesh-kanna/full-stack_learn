import React from 'react'

const ChildB = ({setCount}) => {
  return (
    <div>
      <h2>ChildB</h2>
      <button onClick={()=> setCount(prev => prev+1)}>Increment Count</button>
    </div>
  )
}

export default ChildB
