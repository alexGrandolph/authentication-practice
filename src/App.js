import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import useToken from './Hooks/useToken';


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  };
  
  
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
