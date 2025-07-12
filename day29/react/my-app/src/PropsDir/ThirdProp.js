import React from 'react'

const ThirdProp = (props) => {
    const {name,course,fee}=props.stdInfo;
  return (
    
    <div>
      ThirdProp : {props.personinfo}
        <br />
        <p>{name}</p>
        <p>{course}</p>
        <p>{fee}</p>
    </div>
  )
}

export default ThirdProp
