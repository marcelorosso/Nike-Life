import logo from '../nike_shoe.jpg';
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = () => {
    const greeting = "Hello React Word - Nike page is coming soon";
    const greeting2 = "Hello React Word - Nike page is near happens"
  return (
    <div className="App">
        <main className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <h2/> {greeting2}
          <h1>
          Nike - Life
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </main>
    </div>
  )
}

export default ItemListContainer

