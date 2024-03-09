import logo from './logo.svg';
import './App.css';
import TextToSpeech from './Components/TextToSpeech';

function App() {
  const text = "Text-to-speech feature";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextToSpeech text={text} />
        <p>
          Hellloooo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello it is me!
        </p>
      </header>
    </div>
  );
}

export default App;
