import React, {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Count from './itemCount';
import { formatPrice } from './formatPrice';

const Details = (item) => {

  const {addItemsToCart} = useContext(CartContext)

  // Shows or not the item count on the cart picture depending on if the items is/isn't in the cart
  const [isInCart, setIsInCart] = useState(false)

  // Add product to cart (The item quantity must be managed by cart pop-up page)
  const onAdd = (amount) => {
      addItemsToCart(item, amount)
      setIsInCart(true)
  }

  if (item.quantity === 0) {
    return (
      <div className='cardDetail'>
        <div className="imgDetail">
        <img src={item.main_picture_url} alt="productImageDetail" />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
            <h2>{item.name}</h2>
            <p>{item.story_html}</p>
            <h4>Size Range</h4>
            <select className="form-select" aria-label="Default select example">
              <option>{item.size_range[0]}</option>
              <option>{item.size_range[1]}</option>
              <option>{item.size_range[2]}</option>
              <option>{item.size_range[3]}</option>
              <option>{item.size_range[4]}</option>
            </select><br/>
            <h4 className="price"><span> Cash Price: </span><strong>${item.retail_price_cents}</strong></h4><br/>
            <div>
              <h4>Color: {item.color}</h4>
              <h4>Designer: {item.designer}</h4>
              <h4>Details: {item.details}</h4>
            </div>

            
          </div><br/>
          <div className='withoutStock'>
            
            <button type="button" className="btn btn-danger btn-lg" onClick={() => addItemsToCart(item)} disabled={item.quantity === 0}>Without Stock - Arriving in August</button>
            <Link to="/store" style={{textDecoration: 'none'}}><button type="button" className="btn btn-danger btn-lg">Continue Buying</button></Link>  
          </div>

        </div>
    </div>
    )
  }else {
    return (
      <div className='cardDetail'>
        <div className="imgDetail">
        <img src={item.main_picture_url} alt="productImageDetail" />
        </div>
        <div className='textDetail'>
          <div className="cardHeader">
            <h2>{item.name}</h2>
            <p>{item.story_html}</p>
            <h4>Size Range</h4>
            <select className="form-select" aria-label="Default select example">
              <option>{item.size_range[0]}</option>
              <option>{item.size_range[1]}</option>
              <option>{item.size_range[2]}</option>
              <option>{item.size_range[3]}</option>
              <option>{item.size_range[4]}</option>
            </select><br/>
            <h4 className="price"><span> Cash Price: </span>{formatPrice(item.retail_price_cents)}</h4><br/>
            <div>
              <h4>Color: {item.color}</h4>
              <h4>Designer: {item.designer}</h4>
              <h4>Details: {item.details}</h4>
            </div>
          </div><br/>
          <div>
            {/* If the product was added in the cart, the checkout button will appears, otherwise, the counter will be shown*/}
            {isInCart ? (
                            <div className="d-flex flex-column space-y-8 mt-6">
                                <Link to='/checkout'>
                                <button className="btn btn-dark" type="button">Go Checkout</button>
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