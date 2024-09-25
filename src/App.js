import logo from './logo.svg';
import './App.css';
import PageLoadTime from './components/PageLoadTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi! My name is Adam I. Horvath.</p>
        <div className="page_load_time">
          <PageLoadTime />
        </div>
      </header>
    </div>
  );
}

export default App;
