// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/signup" 
            element={<SignUp setUser={setUser} />} 
          />
          <Route 
            path="/login" 
            element={<Login setUser={setUser} />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;