import React from "react"
import Footer from "./footer";
import Slider from './slider';


const ItemListContainer = () => {
  return (
    <>
      <div className="App">
          <main className="App-main">
            <Slider />
          </main> 
      </div>
      <Footer />
    </>
  )
}

export default ItemListContainer;
