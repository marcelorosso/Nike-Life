import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import IconButton from "@mui/material/IconButton"
import StyledBadge from "@mui/material/Badge"
import ItemCart from './itemCart'
import { Link } from 'react-router-dom'
import { formatPrice } from './formatPrice'

const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductslength] = useState(0)

    const {cartItems, emptyCart} = useContext(CartContext)

    useEffect(()=> {
        setProductslength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems])

    const total = cartItems.reduce(
        (previous, current) => previous + current.amount * current.retail_price_cents, 0)


    return (
        <div className="cartContainer">
            <div className="buttonCartContainer">
                <div className='buttonCart'>
                <IconButton 
                    style={{zIndex: "1"}}
                    onClick={()=> {
                    setCartOpen(!cartOpen)
                }} aria-label="cart">
                    <StyledBadge badgeContent={productsLength} color="primary">
                        {!cartOpen ? (
                            <img src="data:image/png;base64,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" alt='cartImage'
                            style={{marginBottom: "10px"}}
                            />
                            
                        ) : (
                            <>
                            <img onClick={() => emptyCart()} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACJUlEQVRYhe2Wz27TQBDGv3GCKcZxgpyIFC4RVxSeAJU2cEDihBDiHXgBuHHlyIUXQDwAEu2tUVU4cA/nIoQqJxjjP+u0alDWwyVbnED+WDhUQL/banfm+2k8413gVP+7KGuAF4i7AD8HYXVsg9EF6GH1gvVqyQCR85P5j2xOtVy+nCVfMSuAMq9WymPwXhgxGJeyp5siL4w4M9wMTQIraXma5C4vjPh3KrFI/IlX4O8CmCzpvHXuAMvQKcA/CbB3kgB7JIfrqbX4owAkh+u2be8zswYApNHteRC5Ati2ve8G8dpXITpBEDRsy3o3ghhTN45rXijavt9v5t4DBUoegXFVkrajICbNi5K3AW4lWvIsd4DB4cF9gHYANCRpu5/D8Era/IyUbQJfY1BH1/Bg5otI/Van3eXT5DiOoRvma4BbAD5J8EZSKMRFydvK/KyGm5ZleUsBAIBer3e+uLKyBdANAB8BjgFqps2BeU1IcADA98X1rAD1ev1geHR0h8BvADQAagL8Pm0OzHsTMr0A+HGi8VsvjBb1/sYa3atZ1qZhGOcGCSoEdUFSSUppAjgGmFkBu1x6AtBTVYks5kKI6iDBccOpSqjpUAGZv+0iUqOWbrh+v3+oG+YmwBsYNebFSuVD7gBq1H7VcKPpGIPIHcALRRvgFoM6wwLdWi2VvqT3Xdc1C7q+xaA1gHfz9ofv95teKNrdOK5NO+O6rukF0csgCBrfAdd/H/Lw8p9oAAAAAElFTkSuQmCC" alt='emptyIcon'></img>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABOElEQVRYhe2WPU4DMRCF31iiQlotgovQUCNxgeQKURACchsKxM9laELDQbaw5bErCrJD48JsiIh/ViCxrxzL8z6NNTMGJk36RsaYRls/q5VPWz8zxjT7m7N71ex67dxNqbmxfqHZbTS7N2Y+Gp6rYUDUwQWAMwAEwZ1hv8w2Z78Ukqfgc/oh6jyVWnIrsZWD+bosQQJEsXkJRDXzHIjq5ikQo5nvA1FiTqkQUVsJCCvq6f1LDHJ70rb3owAAobchD8GwD2EFoCfQ1XHbPKfmTNag5EVvvjUJs0WUXE3gDzxBUgWM9YvIXABZkdBlAFECeayxwHaa72q1Grsj23x0iJQhUx0iZ8JVgygZr8UQNRZLNoS2fh5d3JR+yeJc2vr5j5e6rjs0zC+1VmpUiXXaz/i3vuWT/p0+Af8icRkQ58t4AAAAAElFTkSuQmCC" alt="closeCart"></img>
                            </>
                        )}
                    </StyledBadge>
                </IconButton> 
                </div>
            </div>
            {cartItems && cartOpen && (
                <div className="cart">
                    <h2>Nike - Life Cart</h2>

                    {cartItems.length === 0 ? (
                        <p className="cartEmpty">The cart is empty</p>
                    ) : (
                        <div className='productsContainer'>
                            {cartItems.map((item, i) => (
                            <ItemCart key={i} item={item} />
                            ))}
                        </div>
                    )}

                    <h2 className="total">Total : {formatPrice(total)}</h2>
                    <div style={{"textAlign":"center", "paddingBottom":"10px"}}>
                        <Link to="/checkout">
                            <button  className="btn btn-danger">Go Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Cart
