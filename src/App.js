import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import ItemListContainer from './components/Products/Products';
import ItemCount from './components/ItemCounts/ItemCounts';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='fila'>
      <ItemListContainer/>
      <ItemCount/>
      </div>
    </div>
  );
}

export default App;
