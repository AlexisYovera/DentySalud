import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import rutas from './route-config';
import ComponenteMenu from './menu/componenteMenu';

//ESTE ES EL COMPONENTE APP
function App() {
  return (
    <div className='container'>
      
      <BrowserRouter>
      <ComponenteMenu/>
      <Routes>    
        {
        rutas.map(ruta => 
          <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>} />)          
        }
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
