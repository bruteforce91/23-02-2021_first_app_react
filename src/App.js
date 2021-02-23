import logo from './logo.svg';
import './App.css';

const date=new Date();
const getYear=date.getFullYear()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main >
        <h1>First App in React</h1>
      </main>
      <footer>Copyright by me - {getYear}</footer>
    </div>
  );
}

export default App;
