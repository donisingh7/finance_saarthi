import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Industries from './components/Industries';
import ContactPage from './components/ContactPage';
import Navbar from "./components/Navbar";
import AppRoutes from './routes/AppRoutes';
import AboutPage from './components/AboutPage';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage />} /> 
      </Routes>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;

