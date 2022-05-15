import React from 'react';
import './App.css';
import Navigation from './components/Navigation/index';
import About from './components/About/index';
import Contact from './components/Contact';


function App() {
  return (
    <div>
        <Navigation/>
      <main>
        <About/>
      </main>
      <Contact/>
    </div>
  );
}

export default App;
