import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/adminPages/AdminDashboard";
import Login from "./components/Pages/Login";
import UserTable from "./components/adminPages/UserTable";
import PropertyTable from "./components/adminPages/PropertyTable";
import MasterTable from "./components/adminPages/MasterTable";
import Home from "./components/Pages/Home";
import DetailedView from "./components/Pages/DetailedView";
import SearchResult from "./components/Pages/SearchResult";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/adminDashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="/property" element={<PropertyTable />} />
          <Route path="/Master" element={<MasterTable />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/builderFloorDetails" element={<DetailedView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
