import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './assets/routes/Home'
import Habilidades from './assets/routes/Habilidades.jsx';
import Projetos from './assets/routes/Projetos.jsx';
import Contatos from './assets/routes/Contato.jsx';
import Experiencia from './assets/routes/Experiencia.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Projetos",
        element: <Projetos />,
      },
      {
        path: "/Experiencia",
        element: <Experiencia />,
      },
      {
        path: "/Habilidades",
        element: <Habilidades />,
      },
      {
        path: "/Contatos",
        element: <Contatos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
