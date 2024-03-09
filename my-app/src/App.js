import logo from './logo.svg';
import './App.css';
import '@passageidentity/passage-elements/passage-auth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
        <div>
          <passage-auth app-id="tVgNjuNEpEwYaNeBqpnSQ17q"></passage-auth>
          <script src="https://psg.so/web.js"></script>
        </div>
      </header>
    </div>
  );
}

export default App;
