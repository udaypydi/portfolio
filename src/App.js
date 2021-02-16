import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Introduction from './components/Introduction/Introduction.component';
import './App.css';

function App() {
  
  useState(() => {
    ReactGA.initialize('UA-119520190-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Introduction />
    </div>
  );
}

export default App;
