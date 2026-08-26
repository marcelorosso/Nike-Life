import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
import { formatPrice } from './formatPrice';

const Card = (props) => {
  return (
    <div className='card'>
      <div className="cardImg">
        <img src={props.grid_picture_url} alt={props.name} />
      </div>
      <div className="cardHeader">
        <h4>{props.name}</h4>
        <p className="price">{formatPrice(props.retail_price_cents)}</p>
        <Link to={`/details/${props.id}`}>
          <button className="btn btn-dark">View Details</button>
        </Link>
      </div>
    </div>
  )
}

export default Card
