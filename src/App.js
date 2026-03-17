import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproduct';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to sokogarden</h1>
        </header>
        <nav>
          <Link to="/Signup">Sign up</Link>
          <Link to="/Signin">Sign in</Link>
          <Link to="/addproduct">Add product</Link>

        </nav>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
