import { useState } from 'react'
import './App.css'
import './index.css';
import { Navbar } from './components/Nav/Navbar'
import { HomeContent } from './Views/HomePage/HomeContent';
import { FeaturedProducts } from './Views/Featured/FeaturedProducts';
import { About } from './Views/AboutUs/About';
import { FAQ } from './Views/FAQ/FAQ.jsx'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <HomeContent/>
        <FeaturedProducts/>
        <About/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default App