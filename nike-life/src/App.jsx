import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/nav_bar';
import ItemListContainer from './components/item_list_container';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ProductsList from './components/products_list';
import ProductsDetail from './components/itemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<ItemListContainer/>} />
          <Route path="/store" element={<ProductsList/>} />
          <Route path="/details" element={<ProductsDetail />} />
          <Route path="/details/:id" element={<ProductsDetail />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>      
      </BrowserRouter>
      
    </>
  );
}

export default App;
