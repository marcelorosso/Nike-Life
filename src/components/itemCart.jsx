import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { formatPrice } from './formatPrice'

const ItemCart = ({item}) => {
  const {addingIntoCart, deleteItemsFromCart} = useContext(CartContext)

  const {id} = item

  return (
    <div className='cartItem'>
      <img src={item.main_picture_url} alt={item.name} />
      <div className='dataContainer'>
        <div className='left'>
          <p>{item.name}</p>
          <div className='buttons'>
            <button onClick={() => addingIntoCart(item)} disabled={item.amount ===  item.quantity} >ADD</button>
            <button onClick={() => deleteItemsFromCart(item)}>DELETE</button>
          </div>
        </div>
        <div className='right'>
          {item.amount}
          <p>Total: {formatPrice(item.amount * item.retail_price_cents)}</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ItemCart