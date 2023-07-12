import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import UserTable from './components/adminPages/UserTable';
import PropertyTable from './components/adminPages/PropertyTable';
import MasterTable from './components/adminPages/MasterTable';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="/property" element={<PropertyTable />} />
          <Route path="/Master" element={<MasterTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
