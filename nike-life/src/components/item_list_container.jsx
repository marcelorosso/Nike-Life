import logo from '../nike_shoe.jpg';
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import ProductsList from './products_list';

const ItemListContainer = () => {
    let greeting = "Hello React Word - Nike page is near happens";
  return (
    <>
      <div className="App">
          <main className="App-main">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> {greeting} </h2>
            <h1> Nike - Life </h1>
          </main>
          <ProductsList />
      </div>
    </>
  )
}

export default ItemListContainer;

