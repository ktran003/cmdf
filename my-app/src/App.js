import React from 'react';
import './App.css';
import TextToSpeech from './Tools/TextToSpeech';
import './index.css';
import '@passageidentity/passage-elements/passage-auth'
import Login from './Pages/Login';

function App() {
  const text = "Text-to-speech feature";
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
