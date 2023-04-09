import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Routes
import ItemRoot from './routes/item';
import Root from './routes/root';
import Cart from './routes/cart';
import Layaout from './components/Layaout';
 import { CustomProvider } from './Context';
 import Error from "./routes/error";
//previa descarga pagina rout
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAFXi8MjlBJtzvyc2AzBhh55Nl8BXILJCk",
  authDomain: "tu-cerveceria-b3327.firebaseapp.com",
  projectId: "tu-cerveceria-b3327",
  storageBucket: "tu-cerveceria-b3327.appspot.com",
  messagingSenderId: "646020408039",
  appId: "1:646020408039:web:4d43efdec9fe3e86fab842"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />, 
    errorElement: <Error />,
    children: [
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
    element: <Cart />,
  },
  // {
  //   path: '/checkout',
  //  element: <div>Hello world!</div>,
  // },

],
  },
]);
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CustomProvider>
     <RouterProvider router={router} />
     </CustomProvider>
  </React.StrictMode>
);
