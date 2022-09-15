import './App.css';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/dashboard' className="movies-list" element={<Dashboard />} />
        <Route path='/preferences' className="movie-show" element={<Preferences />} />


      </Routes>
    </div>
  );
}

export default App;
