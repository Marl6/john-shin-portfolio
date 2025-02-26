import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header onNavigate={setActiveSection} activeSection={activeSection} />
      <MainContent activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
