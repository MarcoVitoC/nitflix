import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import Guest from './pages/Guest.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Guest/>
   },
   {
      path: "/login",
      element: <SignIn/>
   },
   {
      path: "/home",
      element: <Home/>
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router}/>
   </React.StrictMode>,
);
