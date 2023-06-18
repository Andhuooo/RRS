import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import SearchBar from './Components/SearchBar';
import './styles.css';

function App() {

  // const location = useLocation();
  const isDashboardRoute = false;
  // Function to check if the current route is the dashboard
  // const isDashboardRoute = () => {
  //   // return location.pathname === '/dashboard';
  // };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isDashboardRoute && (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Log Out</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/searchbar" element={<SearchBar/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
