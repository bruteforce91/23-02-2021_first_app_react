import logo from './logo.svg';
import './App.css';
import consola from '../node_modules/consola'

const date=new Date();
const getYear=date.getFullYear()

function handleClick(){
  consola.success("Buona giornata!")
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>First App in React</h1>
        <button onClick={handleClick}>Clicca</button>
      </main>
      <footer>Copyright by me - {getYear}</footer>
    </div>
  );
}

export default App;
