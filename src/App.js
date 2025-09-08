import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Industries from './components/Industries';
import ContactPage from './components/ContactPage';
import Navbar from "./components/Navbar";
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <AppRoutes  />
    </Router>
  );
}

export default App;

