import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from './components/ServicioApiCustomers';
import ServiceApiSuppliers from './components/ServiceApiSuppliers';
import Empleados from './components/Empleados';
import EmpleadoOficio from './components/EmpleadoOficio';
import Empleado from './components/maestrodetalle/Empleado';
import Departamento from './components/maestrodetalle/Departamento';
import Alumnos from './components/Alumnos';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<MenuRutas></MenuRutas>
<Router></Router>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
