import React from 'react';
import "../styles.css";
import Count from './item_count';

const Details = (props) => {
  return (
    <div className='cardDetail'>
        <div className="imgDetail">
        <img src={props.main_picture_url} alt="productImageDetail" />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
              <h2>{props.name}</h2>
              <p>{props.story_html}</p>
              <div className='sizes'>{props.size_range}</div>
              <p className="price"><span> Price: $</span>{props.retail_price_cents}</p>
              <button className="btn btn-dark">Add To Cart</button>
          </div><br/>
          <div>
            <Count stock= {props.quantity}/>
          </div>
        </div>
    </div>
  )
}

export default Details