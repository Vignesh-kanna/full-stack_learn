// import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Link, Route, Routes } from 'react-router-dom';
// import SmartPhone from './SmartPhone';
// import SmartPhone from './Smartphone';
// import HeaderComponent from './HeaderComponent';
// import SectionComponent from './SectionComponent';
// import FooterComponent from './FooterComponent';
// import Sample from './Sample';
// import MyComponent from './MyComponent';
// import Portfolio from './Portfolio';
// import Example from './Example';
// import Portfolio from './Portfolio';
// import FirstProp from './FirstProp';
// import NameProp from './NameProp';
// import SecondProp from './SecondProp';
// import ThirdProps from './ThirdProps';
// import CarProp from './CarProp';
// import MyState from './MyState';
// import MyState2 from './MyState2';
// import GlobalVarCom from './GlobalVarCom';
// import LoginForm from './LoginForm';
// import UseEffectExample from './UseEffectExample';
// import UseEffectExample1 from './UseEffectExample1';
// import ApiExample from './ApiExample';
// import AxiosExample from './AxiosExample';
// import Badge from './Badge';
// import Timer from './Timer';
// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2025
// };
// import Task from './Task';
// import Toggle from './Toggle';
// import Task1 from './Task1';
// import ListCondition from './ListCondition';
// import TableData from './TableData';
// import MyForm from './MyForm';
// const product = {
//   pimg: "https://tse1.mm.bing.net/th/id/OIP.13LP7iSRfenGZFCrHZU_rgHaEc?pid=Api&P=0&h=180",
//   pname: "Lenovo Laptop",
//   pdesc: "This is a sample product description.",
//   price: "60,000"
// };
// import Task from './Task';

function App() {
  // const [status, setStatus] = useState(true);
  return (
    <div className="App">
      {/* <h1>This is my project.</h1> */}
      <div className="">
        <Link to="/home" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contact" className='link'>Contact</Link>
        <Routes>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <button onClick={() => setStatus(!status)}>Toggle</button>
        {status && <Timer />} */}
        {/* <Badge /> */}
      </div>
    </div>
  );
}

export default App;