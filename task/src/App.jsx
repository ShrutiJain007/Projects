import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top/Top'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'
import Partner from './components/Pages/Partner'
import Contact from './components/Pages/Contact'
import OurStores from './components/Pages/OurStores'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Top/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blogs' element={<Blog/>}/>
      <Route path='/Partner' element={<Partner/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/OurStores' element={<OurStores/>}/>
    </Routes>
   
    </>
  )
}

export default App
