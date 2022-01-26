import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import ItemCount from './components/ItemCounts/ItemCounts';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {


  return (
    <div className="App">
      <NavBar />
      <div className='fila'>

      <ItemCount/>
      <h1>Detalles del producto</h1>
      <ItemDetail/>
      </div>
    </div>
  );
}

export default App;
