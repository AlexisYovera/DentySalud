import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//IMPORTAMOS BOOTSTRAP A LA PAGINA INDEX
import "../node_modules/bootstrap/dist/css/bootstrap.css"

//SE DECLARA UNA CONSTANTE CON EL NOMBRE ROOT QUE SE CARGARA EN EL index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//SE RENDERIZA LA APLICACION 
root.render(
  <React.StrictMode>
    {/*SE CARGAR EL COMPONENTE APP*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
