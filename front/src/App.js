import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ventas from './components/Ventas';
import Carrito from './components/Carrito';
import Productos from './components/layout/Productos';
import CrearProducto from './components/layout/CrearProducto';

//SPA
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home " element={<Home />}/>
            <Route path="/Ventas" element={<Ventas />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path='/productos' element={<Productos />}/>
            <Route path='/CrearProducto' element={<CrearProducto />}/>

          </Routes>

        </div>  
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
