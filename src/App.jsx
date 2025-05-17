import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Search from './components/search/Search';
import Request from './components/request/Request';
import Info from './components/info/Info';
import Events from './components/events/Events';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './App.css';

function App() {
  return (
    <Router basename="/esclapian2">
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/request" element={<Request />} />
          <Route path="/info" element={<Info />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
