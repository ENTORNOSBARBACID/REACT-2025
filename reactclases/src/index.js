import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujosComplejosRender from './components/DibujosComplejosRender';
import PadreDeportes from "./components/Deportes/PadreDeportes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Contador inicio="4"></Contador><br></br>
    <hr></hr>
    <Contador inicio="9"></Contador> */}
    {/* <DibujosComplejos>-*</DibujosComplejos> */}
    {/* <DibujosComplejosRender></DibujosComplejosRender> */}
    <PadreDeportes></PadreDeportes>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
