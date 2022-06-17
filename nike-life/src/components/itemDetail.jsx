import React from 'react';
import "../styles.css";
import Count from './item_count';
// import { useCartContext } from '../context/cartContext';


const Details = (props) => {

  // const {cart, addToCart} = useCartContext()

  // const onAdd = (cant) => {
  //   console.log(cant)
  //   addToCart({...productos, cantidad: cant})
  // }
  return (
    <div className='cardDetail'>
        <div className="imgDetail">
        <img src={props.main_picture_url} alt="productImageDetail" />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
              <h2>{props.name}</h2>
              <p>{props.story_html}</p>
              <h4>Size Range</h4>
              <select className="form-select" aria-label="Default select example">
                <option>{props.size_range[0]}</option>
                <option>{props.size_range[1]}</option>
                <option>{props.size_range[2]}</option>
                <option>{props.size_range[3]}</option>
                <option>{props.size_range[4]}</option>
            </select><br/>
              <h5 className="price"><span> Cash Price: $</span>{props.retail_price_cents}</h5><br/>
              
              <Count stock= {props.quantity} />
          </div><br/>
          <div>
          <button type="button" className="btn btn-outline-dark btn-lg">Buy Product</button>  
          </div>
        </div>
    </div>
  )
}

export default Details