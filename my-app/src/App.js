import React from 'react';
import './App.css';
import TextToSpeech from './Tools/TextToSpeech';
import './index.css';


import '@passageidentity/passage-elements/passage-auth'
import Login from './Pages/Login';
import Chatbot from './Pages/Chatbot';
import Question1 from './Pages/Question1';
import Profile from './Pages/Profile';
import Matching from './Pages/Matching';
import Finish from './Pages/Finish';


function App() {
  const text = "Text-to-speech feature";
  return (
    <div className="App">

      {/* <Login /> */}
      {/* <Chatbot/> */}
      {/* <Question1/> */}
      {/* <Profile/> */}
      {/* <Matching/> */}
      <Finish/>
    </div>
  );
}

export default App;
