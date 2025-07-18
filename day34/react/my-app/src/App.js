import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import Home from './Demo/Home';
import About from './Demo/About';
import Contact from './Demo/Contact';
import Services from './Demo/Services';
import Products from './Demo/Products';
import ProductDetails from './Demo/ProductDetails';
function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/services'>Services</Link>\
      <Link to='/products'>Products</Link>
      <hr/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:productId' element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
