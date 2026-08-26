import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Count from './itemCount';
import { formatPrice } from './formatPrice';

const Details = (item) => {
  const { addItemsToCart } = useContext(CartContext)
  const [isInCart, setIsInCart] = useState(false)

  const onAdd = (amount) => {
    addItemsToCart(item, amount)
    setIsInCart(true)
  }

  if (item.quantity === 0) {
    return (
      <div className='cardDetail'>
        <div className="imgDetail">
          <img src={item.main_picture_url} alt={item.name} />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
            <h2>{item.name}</h2>
            <p>{item.story_html}</p>
            <h4>Size Range</h4>
            <select className="form-select" aria-label="Select size">
              {item.size_range && item.size_range.map((size, i) => (
                <option key={i} value={size}>US {size}</option>
              ))}
            </select>
            <h4 className="price">
              <span>Price: </span>
              <strong>{formatPrice(item.retail_price_cents)}</strong>
            </h4>
            <div>
              <h4>Color: {item.color}</h4>
              <h4>Designer: {item.designer}</h4>
              <h4>Details: {item.details}</h4>
            </div>
          </div>
          <div className='withoutStock'>
            <button type="button" className="btn btn-danger btn-lg" disabled>
              Out of Stock - Coming Soon
            </button>
            <Link to="/store" style={{ textDecoration: 'none' }}>
              <button type="button" className="btn btn-dark">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='cardDetail'>
        <div className="imgDetail">
          <img src={item.main_picture_url} alt={item.name} />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
            <h2>{item.name}</h2>
            <p>{item.story_html}</p>
            <h4>Size Range</h4>
            <select className="form-select" aria-label="Select size">
              {item.size_range && item.size_range.map((size, i) => (
                <option key={i} value={size}>US {size}</option>
              ))}
            </select>
            <h4 className="price">
              <span>Price: </span>
              {formatPrice(item.retail_price_cents)}
            </h4>
            <div>
              <h4>Color: {item.color}</h4>
              <h4>Designer: {item.designer}</h4>
              <h4>Details: {item.details}</h4>
            </div>
          </div>
          <div>
            {isInCart ? (
              <div className="d-flex flex-column mt-3" style={{ gap: '12px' }}>
                <Link to='/checkout'>
                  <button className="btn btn-dark" type="button">Go to Checkout</button>
                </Link>
                <Link to='/store'>
                  <button className="btn btn-dark" type="button" style={{ background: 'transparent', color: '#111', border: '1.5px solid #111' }}>Continue Shopping</button>
                </Link>
              </div>
            ) : (
              <Count onAdd={onAdd} stock={item.quantity} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Details
