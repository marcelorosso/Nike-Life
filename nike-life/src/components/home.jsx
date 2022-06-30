import logo from '../nike_shoe.jpg';
import '../styles.css';
import React from "react"
import Slider from './slider';


const ItemListContainer = () => {
    let greeting = "Hello React Word - Nike page is near happens";
  return (
    <>
      <div className="App">
          <main className="App-main">
            <Slider />
          </main> 
      </div>
      
    </>
  )
}

export default ItemListContainer;

