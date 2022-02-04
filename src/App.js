import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartContext } from './components/context/CartContext';


function App() {
  return (
    <CartContext.Provider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="products">
            <Route index  element={<ProductsPage/>}/>
            <Route path= ":productId" element ={<ProductDetailPage/>}/>
          </Route>
          <Route path="about" element={<AboutUsPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </CartContext.Provider>
);
}

export default App;


