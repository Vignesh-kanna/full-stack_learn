import React from 'react'

const StudentProp = (props) => {
  return (
    <div>
      Name:{props.name}
        <br />
        Course:{props.course}
        <br />
        Fee:{props.fee}
    </div>
  )
}

export default StudentProp
