import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/nav_bar';
import ItemListContainer from './components/item_list_container';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  );
}

export default App;
