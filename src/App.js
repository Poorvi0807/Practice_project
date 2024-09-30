import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Users from './Components/Users';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
