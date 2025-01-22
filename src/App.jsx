import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import WorkOutSessions from './components/WorkOutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';
import Hero from './components/Hero';
export default function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <WorkOutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BmiCalculator />
        <Footer />
        <ToastContainer theme='dark' position='top-center' />
      </div>
    </Router>
  )
}
