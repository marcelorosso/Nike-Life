import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

const Card = (props) => {
  return (
    <div className='card'>
        <div className="cardImg">
        <img src={props.grid_picture_url} alt="productImages" />
        </div>
        <div className="cardHeader">
            <h2>{props.name}</h2>
            <p>{props.category}</p>
            <p className="price"><span>$</span>{props.retail_price_cents}</p>
            <Link to={`/detalle/${props.id}`}><button className="btn btn-dark">Details</button></Link>
        </div><br/>
    </div>
  )
}

export default Card

