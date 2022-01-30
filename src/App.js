import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCounts/ItemCounts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount/>
      <h1>Detalles Producto</h1>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
