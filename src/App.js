
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproduct';
import Getproduct from './Components/Getproduct';
import Makepayment from './Components/Makepayment';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here  */}

        <Navbar />


        <header className="App-header">

          <h1 className='oi-regular text-white'>OUTFITS MANAGEMENT & ACCESSORIES</h1>

        </header>
        <marquee className="text-dark bold font-weight-bold font-italic btn btn-danger">WELCOME ALL   TO OUR PLATFORM </marquee>

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


