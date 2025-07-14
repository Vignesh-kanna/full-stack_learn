import React, { useState } from 'react'


const Task = () => {

  const [inputText, setInputText] = useState('');
  const [names, setNames] = useState([]);

  const list = () => {
      setNames([...names, inputText]);
      setInputText('');
    
  };

  return (
    <div>
      Enter your name:
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>

      <button onClick={list}>addname</button>
      {names.length > 0 && (
        <div>
          <ol style={{textAlign:'left'}}>
            {names.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Task
