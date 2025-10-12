
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import { Navigationbar } from './components/Navigationbar'
import { Mainhomepage } from './components/Mainhomepage'
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Contacts } from "./components/Contacts"
import { Symptomss } from "./components/Symptomss"
import Symptoms from "./Symptoms"
export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {children}
    </div>
  );
}


function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
             //path depends on you , import the element and pass it
          <Route path="/*" element={<Mainhomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="test" element={<Symptoms/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services/symptomss" element={<Symptomss />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
