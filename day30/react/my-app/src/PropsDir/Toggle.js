import React from 'react'
import { useState } from 'react'
const Toggle = () => {
    const [isOn,setIsOn]=useState(true);
    const [inputText,setInputText]=useState('');
    const friends =['siddu','shravan','vignesh','sharath'];
  return (
    <div>
      <h2>Toggle messge : {isOn ?  'ON':'OFF'}</h2>
      <button onClick={()=>setIsOn(!isOn)}>toggle</button>
      <hr/>
      Enter your name:<input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <h2>Mirror text is:{inputText}</h2>
      <hr/>
      <ul style={{textAlign:'left'}}>
        
            {friends.map((friends,index)=>
            <li key={index}>{friends}</li>
            )}
      </ul>
      <hr/>
     
    </div>
  )
}

export default Toggle
