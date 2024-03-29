import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import Guest from './pages/Guest';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Guest/>
   },
   {
      path: "/sign-in",
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
