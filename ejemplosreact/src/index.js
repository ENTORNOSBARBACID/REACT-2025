import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import Matematicas from './components/Matematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SaludoPadre></SaludoPadre> */}
    {/* <Matematicas></Matematicas> */}
    {/* <Contador></Contador> */}
    <Car marca="ford" modelo="focus" velocidadmax="113" aceleracion="25"></Car>
    <Car marca="ford" modelo="puma" velocidadmax="233" aceleracion="10"></Car>
    <Car marca="bugatti" modelo="beyron" velocidadmax="245" aceleracion="50"></Car>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
