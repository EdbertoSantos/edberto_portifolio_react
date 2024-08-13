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
import ErrorPage from './assets/routes/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/edberto_portifolio_react",
        element: <Home />,
      },
      {
        path: "/edberto_portifolio_react/Projetos",
        element: <Projetos />,
      },
      {
        path: "/edberto_portifolio_react/Experiencia",
        element: <Experiencia />,
      },
      {
        path: "/edberto_portifolio_react/Habilidades",
        element: <Habilidades />,
      },
      {
        path: "/edberto_portifolio_react/Contatos",
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
