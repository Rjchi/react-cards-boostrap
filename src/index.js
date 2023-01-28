// Instalamos Boostrap con npm install bootstrap (en la terminal)
// He importamos el framework
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Renderizamos en le buscador a el componente <App/>
root.render(<App />);
