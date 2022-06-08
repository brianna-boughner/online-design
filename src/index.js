import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Experts from './components/Experts/Experts';
import Packages from './components/Packages/Packages';
import Date from './components/Date/Date';
import Confirmation from './components/Confirmation/Confirmation';
import FAQ from './components/FAQ/FAQ';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experts" element={<Experts />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/date" element={<Date />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
        <Route path="/FAQ" element={<FAQ />}/>
      </Routes>
      
    </BrowserRouter>
);
