import Navbar from "./components/Navbar";
import Saludo from "./components/ItemListContainer"
import imagenes from "./components/imagenes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
      <Navbar />
      <div>
        <img src={imagenes.img1} />

      </div>
      <Saludo persona="humano" />


    </div>
  );
}


export default App;
