import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Calculation from './components/calculation.jsx'
import Login from './components/login.jsx'
import SignUp from './components/signup.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/calculation' element={<Calculation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
