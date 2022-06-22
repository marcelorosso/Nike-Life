import React from 'react';
import { useContext } from 'react';
import "../styles.css";
import { CartContext } from './context/cartContext';
import { Link } from 'react-router-dom';

const Details = (props) => {

  const {addItemsToCart} = useContext(CartContext)

  if (props.quantity === 0) {
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
            <h4 className="price"><span> Cash Price: </span><strong>${props.retail_price_cents}</strong></h4><br/>
            <div>
              <h4>Color: {props.color}</h4>
              <h4>Designer: {props.designer}</h4>
              <h4>Details: {props.details}</h4>
            </div>

            
          </div><br/>
          <div className='withoutStock'>
            
            <button type="button" className="btn btn-danger btn-lg" onClick={() => addItemsToCart(props)} disabled={props.quantity === 0}>Without Stock - Arriving in August</button>
            <Link to="/store"><button type="button" className="btn btn-danger btn-lg">Continue Buying</button></Link>  
          </div>

        </div>
    </div>
    )
  }else {
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
            <h4 className="price"><span> Cash Price: </span><strong>${props.retail_price_cents}</strong></h4><br/>
            <div>
              <h4>Color: {props.color}</h4>
              <h4>Designer: {props.designer}</h4>
              <h4>Details: {props.details}</h4>
            </div>
          </div><br/>
          <div>
            <button type="button" className="btn btn-outline-dark btn-lg" onClick={() => addItemsToCart(props)} disabled={props.quantity === 0}>Add to Cart</button>  
          </div>
        </div>
      </div>
    )
  }
}

export default Details