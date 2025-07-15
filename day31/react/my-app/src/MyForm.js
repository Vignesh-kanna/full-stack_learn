import React from 'react'
import { useState } from 'react'

const MyForm = () => {
      const [name, setNames] = useState('');
      const [check, setCheck] = useState(false);
      const [gender, setGender] = useState('');
      const [color,setColor]=useState('');
      const [course,setCourse]=useState('')
      const [message, setMessage]=useState('');
  return (
    <div>
      <h2>React Form:</h2>
      <label>Enter your name:</label>
      <input type='text' value={name} onChange={(f) => setNames(f.target.value)} />
      <p>Your name is: {name}</p>
      <hr />
      <input type='checkbox' name='check' checked={check} onChange={(e) => setCheck(e.target.checked)} />Accept Terms
      <p>Status is: {check ? 'Accept' : 'Not Accept'}</p>
      <hr />
      <label>
        <input
          type='radio'
          name='gender'
          value='male'
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type='radio'
          name='gender'
          value='female'
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>you are selected: {gender}</p>
      <hr/>



      
        <input type='radio' name='color' value='red' onChange={(e) => setColor(e.target.value)}/>Red
        <input type='radio' name='color' value='green' onChange={(e) => setColor(e.target.value)}/>Green
        <input type='radio' name='color' value='Blue' onChange={(e) => setColor(e.target.value)} /> Blue
     <p>you are selected: {color}</p>
     <hr/>

    <label>Select any course</label>
     <select onChange={(e) => setCourse(e.target.value)}>
        <option value=''>Selcet the course</option>
        <option value='react'>React</option>
        <option value='js'>js</option>
        <option value='css'>css</option>
     </select>
     <p>selected Course is:{course}</p>
     <hr/>
     enter your message:
     <textarea rows={5} cols={20} value={message} onChange={(e) => setMessage(e.target.value)}/>
     <p>your message is:{message}</p>
    </div>
  )
}

export default MyForm
