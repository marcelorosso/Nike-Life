import React from 'react';
import "../styles.css";
import Count from './item_count';

const Card = (props) => {
  return (
    <div className='card'>
        <div className="cardImg">
        <img src={props.img} alt="productImages" />
        </div>
        <div className="cardHeader">
            <h2>{props.product}</h2>
            <p>{props.description}</p>
            <p className="price"><span>{props.currency}</span>{props.price}</p>
            <button className="btn btn-dark">Add to Cart</button>
        </div><br/>
        <div>
          <Count stock= {props.quantity}/>
        </div>
    </div>
  )
}

export default Card

