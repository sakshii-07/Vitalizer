// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navigationbar } from "./components/Navigationbar";
import { Mainhomepage } from "./components/Mainhomepage";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contacts } from "./components/Contacts";
import { Symptomss } from "./components/Symptomss"; // optional / old page
import Symptoms from "./Symptoms"; // ✅ our new Medical Assistant page

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 [.dark_&]:bg-gray-900 [.dark_&]:text-gray-100 transition-colors">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <Navigationbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Mainhomepage />} />

          {/* Static pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />

          {/* ✅ New: main Medical Assistant page */}
          <Route path="/assistant" element={<Symptoms />} />

          {/* Old extra page (you can remove if not needed) */}
          <Route path="/services/symptomss" element={<Symptomss />} />

          {/* Fallback: any unknown route → home */}
          <Route path="*" element={<Mainhomepage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
