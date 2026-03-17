import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproduct';
import Getproduct from './Components/Getproduct';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to sokogarden</h1>
        </header>
        <nav>
          <Link to="/Signup" className='btn btn-warning m-2'>Sign up</Link>
          <Link to="/Signin" className='btn btn-danger m-2'>Sign in</Link>
          <Link to="/addproduct" className='btn btn-success m-2'>Add product</Link>
          <Link to="/" className=' btn btn-primary m-2'>Get product</Link>

        </nav>
        <Routes>
          <Route path='/' element={<Getproduct />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
