import React from 'react'


const Mirror = () => {
    const person = {
        app: 'google',
        age: 40
    };
  return (
    <div>
      {/* create a object and map it  */}
      <ul>
        {Object.entries(person).map(([key, value], index) => (
          <li key={index}>{key}: {value}</li>
        ))}
      </ul>

    </div>
  )
}

export default Mirror
