//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Home from './components/Home'
//import Dashboard from './components/Dashboard'
//import Product from './components/Product'
//import Details from './components/Details'
import  ButtonUsage from './mybutton';
import  TryFabricjs from './fabricjs';
import ShowColorPicker from './ShowColorPicker';

import App2 from './Appbk';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="container mt-5 text-center">
      <BrowserRouter>
{
        <nav>

          <Link className="nav-link" to="/">
            1. Home
          </Link>
          
          <Link className="nav-link" to="fabricjs">
            2. Try Fabricjs
          </Link>

          <Link className="nav-link" to="ShowColor">
            3. Show ColorPicker
          </Link>

        </nav>
}
        <Routes>
          <Route path="/" element={<ButtonUsage />} />
          <Route path="/fabricjs" element={<TryFabricjs />} />

          <Route path="/showcolor" element={<ShowColorPicker/>}/>
   
        </Routes>
      </BrowserRouter>
    </div>
  )
}