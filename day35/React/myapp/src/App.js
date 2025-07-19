import './App.css';
import UseRefExample from './Dome/UseRefExample';
import UseRefExample2 from './Dome/UseRefExample2';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      <UseRefExample/>
      <UseRefExample2/>
    </div>
  );
}

export default App;
