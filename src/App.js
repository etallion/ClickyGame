import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <GameArea />
    <Footer />
    </div>
  );
}

export default App;
