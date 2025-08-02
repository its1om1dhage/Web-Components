import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css' ;
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Collections from './Pages/Collections';
import BookNow from './Pages/BookNow';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home />
      </div>
    },
    {
      path: "/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: "/collections",
      element:
      <div>
        <Navbar/>
        <Collections/>
      </div>
    },
    {
      path: "/booknow",
      element:
      <div>
        <Navbar/>
        <BookNow/>
      </div>
    }
  ]
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
