import Toggle from './PropsDir/Toggle';
import './App.css';
import Mirror from './PropsDir/Mirror';
import Task from './PropsDir/Task';
import ListComponent from './PropsDir/ListComponent';
import TableData from './PropsDir/TableData';
import ProductData from './PropsDir/ProductData';
import Smartphone from './PropsDir/Smartphone';

function App() {
  return (
    <div className="App">
      {/* conditional rendering */}
      <Toggle />
      <Mirror/>
      <Task/>
      <ListComponent/><hr/>
      <TableData/><hr/>
      <ProductData/>
      <Smartphone/>
    </div>
  );
}

export default App;
