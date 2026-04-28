
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproduct';
import Getproduct from './Components/Getproduct';
import Makepayment from './Components/Makepayment';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App  full-height">
        <header className="App-header">
          <h1 className='oi-regular'>OUTFITS MANAGEMENT & ACCESSORIES</h1>
        </header>
        <nav>
          <Link to="/Signup" className='btn btn-warning m-2 oi-regular'>Sign up🔑</Link>
          <Link to="/Signin" className='btn btn-danger m-2 oi-regular'>Sign in🗝️</Link>
          <Link to="/addproduct" className='btn btn-success m-2 oi-regular'>Add product</Link>
          <Link to="/" className=' btn btn-primary m-2 oi-regular'>Get product</Link>


        </nav>
        <Routes>
          <Route path='/' element={<Getproduct />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Makepayment />} />



        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;


