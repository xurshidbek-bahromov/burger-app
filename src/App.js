import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;