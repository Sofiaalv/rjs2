import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './components/Cards/Cards';



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='fila'>
      <CardProduct product="Tazon" price={1000}/>
      <CardProduct product="Maceta" price={900}/>
      <CardProduct product="Cuadro" price={1500}/>
      <CardProduct product="Mesa Ratona" price={5000}/>
      </div>
    </div>
  );
}

export default App;
