import React from 'react';
import './App.css';
// import FirstProp from './PropsDir/FirstProp';
// import SecondProp from './PropsDir/SecondProp';
// import ThirdProp from './PropsDir/ThirdProp';
// import StudentProp from './PropsDir/StudentProp';
// import State from './State';
// import MyState2 from './MyState2';
// import GlobalVarCom from './GlobalVarCom';
import Task from './Task';
// import HeaderComponent from './HeaderComponent';
// import SectionComponent from './SectionComponent';
// import FooterComponent from './FooterComponent';
// const Person = {
//   name: "Vignesh",
//   age: 22
// };
// const student={
//   name: "Vignesh",
//   course: "AIML",
//   fee: 5000
// };
// const car={
//   name: "BMW",
//   model: "X5",
//   price: 100000
// };
const product = {
  pimg:"https://laptopmedia.com/wp-content/uploads/2023/01/3-11-e1672903814934.jpg",
  pname: "Laptop",
  pdesc: "Dell Inspiron 15",
  price: 50000,
}
function App() {
  return (
    <div className="App">
      {/* <HeaderComponent />
      <SectionComponent />
      <FooterComponent /> */}
      {/* <FirstProp name={"Vignesh"}/>
      <SecondProp newCar={car}/>
      <ThirdProp stdInfo={student}/><br/>
      <h1>Student Information:</h1>
      <StudentProp name={"Vignesh"} course={"AIML"} fee={5000}/>
      <State /> */}
      {/* <MyState2 />
      <GlobalVarCom /> */}
      <Task newproduct={product} />
    </div>
  );
}

export default App;
