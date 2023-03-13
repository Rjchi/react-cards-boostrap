// 1- node js
// 2- npx create-react-app nombre-de-la-app (ESTO VA EN EL CMD)
// 3- Para administrar las rutas instalamos npm install react-router-dom
// 4- Instalamos Boostrap con npm install bootstrap (en la terminal)
// 5- Comando para ejecutar nuestro proyecto es npm start
// 6- Instalamos la libreria npm i prop-types para especificar que un componente tiene que recibir
// determinado dato o tipo de dato
// 7- Instalamos una libreria de animaciones de css https://animate.style/ npm install animate.css

// He importamos bootstrap para toda la aplicacion en caso de que no lo queramos en toda la aplicacion
// debemos ir al componente donde lo queramos he importarlo ahi
import 'bootstrap/dist/css/bootstrap.min.css';
// Importamos animate.css
import 'animate.css/animate.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Renderizamos en le buscador a el componente <App/>
root.render(<App />);
