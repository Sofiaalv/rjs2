import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import ItemListContainer from './components/Products/Products';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='fila'>
      <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
