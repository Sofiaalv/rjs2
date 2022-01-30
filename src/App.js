import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCounts/ItemCounts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ProductsPage from '../pages/ProductsPage';


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


