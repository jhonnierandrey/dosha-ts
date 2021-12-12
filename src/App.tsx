import { useState } from 'react';
import { Header, Footer, Home } from './components/index';
import './App.css';

function App() {
  useState(() =>{
    document.title = 'Dosha Test | Inicio'
  })

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
