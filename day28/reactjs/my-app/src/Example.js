import React from 'react'
let imgUrl='https://picsum.photos/200/300?grayscale';

const Example = () => {
  return (
    <div>
      <imgUrl src={imgUrl} alt='car' width={300} height={100}/>
    </div>
  )
}

export default Example
