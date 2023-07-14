import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home'
import About from './components/About'
import Travel from './components/Travel'
import Destination from './components/Destination'

import {BrowserRouter , Routes, Route}from "react-router-dom"


function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Travel/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/travel" element={<Travel/>}/>
      <Route path ="/Destination" element={<Destination/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;