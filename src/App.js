import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './components/context/CartContext';
import ThanksPage from './pages/ThanksPage';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="products">
            <Route index  element={<ProductsPage/>}/>
            <Route path= ":productId" element ={<ProductDetailPage/>}/>
          </Route>
          <Route path="category/:categoryId" element={<ProductsPage/>} />
          <Route path="about" element={<AboutUsPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
          <Route path="thanks/:orderId" element={<ThanksPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </CartProvider>
);
}

export default App;


