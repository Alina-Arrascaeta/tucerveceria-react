import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/itemDetailContainer";
//Routes
import ItemRoot from './routes/item';
import Root from './routes/root';

//previa descarga pagina rout
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/category/:id',
    element: <Root />,
  },
  {
    path: '/item/:id',
    element: <ItemRoot />,
  },
  {
    path: '/cart',
    element: <div>Hello world!</div>,
  },
  {
    path: '/checkout',
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
