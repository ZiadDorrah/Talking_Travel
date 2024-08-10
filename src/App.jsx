import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Story from './pages/story/Story';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
