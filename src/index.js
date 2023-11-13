import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/A_Propos'
import Header from './components/Header'
import Error404 from './pages/404'
import jsonData from '../src/data.json'
import Logements from './pages/Fiche_Logement'
import './style_global.scss'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<Survey />} />
        <Route path="*" element={<Error404 />} /> 
        {jsonData.map((logement) => (
        <Route key={logement.id} path={`/logement/${logement.id}`} element={<Logements logement={logement} />} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
