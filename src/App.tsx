//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Home from './components/Home'
//import Dashboard from './components/Dashboard'
//import Product from './components/Product'
//import Details from './components/Details'
import  ButtonUsage from './mybutton';
import  TryFabricjs from './fabricjs';
import  TryFabricjs2 from './fabricjs2';

import ShowColorPicker from './ShowColorPicker';
import ShowColorPicker2 from './ShowColorPicker2';
import ColorPicker2 from './ColorPicker2';
import ColorPicker3 from './ColorPicker3';
import ColorPicker4 from './ColorPicker4';
import ColorPicker5 from './ColorPicker5';
import ColorPicker6 from './ColorPicker6';
import LoginFinal from './Theme1';
import PopUp from './popup';
import MenuBar2 from './menuBar2';

//import App2 from './Appbk';


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

          <Link className="nav-link" to="showcolor2">
            4. Show ColorPicker 2 directly
          </Link>

          <Link className="nav-link" to="ColorPicker2">
            5. Show ColorPicker 3 directly
          </Link>

          <Link className="nav-link" to="ColorPicker4">
            6. Show ColorPicker 4 directly
          </Link>

          <Link className="nav-link" to="ColorPicker5">
            7. Show ColorPicker 5 directly
          </Link>
          <Link className="nav-link" to="fabricjs2">
            8. Try Fabricjs 2 
          </Link>

          <Link className="nav-link" to="ColorPicker6">
            9. Color Picker 6 
          </Link>

          <Link className="nav-link" to="LoginFinal">
            10. Try theme 
          </Link>


          <Link className="nav-link" to="PopUp">
            11. Popup
          </Link>


        </nav>
}
        <Routes>
          <Route path="/" element={<ButtonUsage />} />
          <Route path="/fabricjs" element={<TryFabricjs />} />
          <Route path="/fabricjs2" element={<TryFabricjs2 />} />


          <Route path="/showcolor" element={<ShowColorPicker/>}/>
          <Route path="/showcolor2" element={<ShowColorPicker2/>}/>
          <Route path="/ColorPicker2" element={<ColorPicker2/>}/>
          <Route path="/ColorPicker3" element={<ColorPicker3/>}/>
          <Route path="/ColorPicker4" element={<ColorPicker4/>}/>
          <Route path="/ColorPicker5" element={<ColorPicker5/>}/>
          <Route path="/ColorPicker6" element={<ColorPicker6/>}/>
          <Route path="/LoginFinal" element={<LoginFinal/>}/>
          <Route path="/PopUp" element={<PopUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}