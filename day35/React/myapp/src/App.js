import './App.css';
import { useState } from 'react';
import Calculate from './Dome/Calculate'; // Change to './Demo/Calculate' if your folder is 'Demo'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={() => setInput(1)}>1</button>
      <button onClick={() => setInput(2)}>2</button>
      <button onClick={() => setInput(3)}>3</button>
      <Calculate number={input} />
      <button onClick={() => setCount(count + 1)}>
        Re-render App ({count})
      </button>
    </div>
  );
}

export default App;