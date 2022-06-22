import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/nav_bar';
import ItemListContainer from './components/home';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ProductsList from './components/itemListContainer';
import ProductsDetail from './components/itemDetailContainer';
import { CartProvider } from './components/context/cartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<ItemListContainer/>} />
          <Route path="/category/:catId" element={<ProductsList/>} />
          <Route path="/store" element={<ProductsList/>} />
          <Route path="/details/:id" element={<ProductsDetail />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>      
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
