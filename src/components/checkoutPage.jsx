import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import {addOrder} from "../firebase/firebaseClient"
import { Link } from "react-router-dom"
import { formatPrice } from './formatPrice'
import Swal from "sweetalert2"
import logo_page from "../logo_page.jpeg"
import Footer from './footer'

const CheckoutPage = () => {

    //Cart Context
    const {cartItems, cartLenght, getTotal, emptyCart} = useContext(CartContext)


    const [idCompra, setIdCompra] = useState("")
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    // Regular expressions for e-mail and telephone fields (inputs)
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    // Get the date when the purchase was made
    const orderDate = new Date().toLocaleDateString()

     // Get the clients data
     const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    // Get the purchase order (client data, products, price and purchase date) and shows a pop-up with the client data
    // when the "buy button is pressed"
    function orderHandler() {
        const order = {
            buyer,
            item: cartItems.map(cartItem => {
                        const id = cartItem.id
                        const nombre = cartItem.name
                        const precio = cartItem.retail_price_cents
                        const amount = cartItem.amount
                
                        return {id, nombre, precio, amount}
                    }),
            totalPrice: getTotal(),
            date: orderDate
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        })

        Swal.fire({
            imageUrl: `${logo_page}`,
            imageWidth: 350,
            imageHeight: 250,
            imageAlt: 'Custom image',
            titleText: `Thanks for your purchase ${(buyer.name).toUpperCase()}`,
            text: `We sent you an email to ${(buyer.email).toLowerCase()} with your purchase order. 
            If you want to know the purchase number just press the "See Purchase ID" button.`,
            color: "green",
            heightAuto: true,
        })
    }

    // It renders a pop-up with client's data when the "see Id button is pressed"
    const showId = () => {
        Swal.fire({
            text: `Purchase ID: ${idCompra}`,
            color: "black" 
        })
    }

    // Checkout Render
    return (
        <>
            {/* Checkout container */}
            <div className=" d-flex justify-content-center align-items-center text-color" style={{marginLeft: '34.5px'}}>
                <div className="d-flex w-97 flex-column justify-content-center align-items-center">

                    {/* Title*/}
                    <h1 className={ "align-self-start fs-3 text-secondary fw-semibold"}>Checkout</h1>
                    
                    {/* Purchase information */}
                    <div className="d-flex w-98 justify-content-start align-items-start" style={{marginRight: '10px'}}>
                        
                        {/* Resume */}
                        <div className="d-flex flex-column align-self-start w-100" style={{marginRight: '1.5rem'}}>
                            <h2 className={"fs-4"}>Resume</h2>
                            <div className="d-flex flex-column border border-opacity-25">
                                <div className={"d-flex justify-content-between text-secondary text-opacity-50"}>
                                    <p>Number of items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className={"d-flex justify-content-between text-secondary text-opacity-50"}>
                                    <p>Shipping cost:</p>
                                    <p>¡Free Shipping!</p>
                                </div>
                                <div className={"d-flex justify-content-between text-secondary fw-semibold"}>
                                    <p>Total:</p>
                                    <p>{formatPrice(getTotal())}</p>
                                </div>
                            </div><br />
                            <Link to='/store' className=" d-flex flex-row align-items-center text-lowercase" style={{ textDecoration: 'none', color: 'gray' }}>
                                <img src="https://img.icons8.com/fluency-systems-filled/24/EBEBEB/double-left.png" alt="leftArrow" className="h-4 w-4 mr-1"/>
                                Return Store
                            </Link><br />
                            <Link to='/' className=" d-flex flex-row align-items-center text-lowercase" style={{ textDecoration: 'none', color: 'gray' }}>
                                <img src="https://img.icons8.com/fluency-systems-filled/24/EBEBEB/double-left.png" alt="leftArrow" className="h-4 w-4 mr-1"/>
                                Comeback Home
                            </Link>
                        </div>

                        {/* Purchase Details*/}
                        <div className="d-flex flex-column justify-content-start align-items-start w-100">

                            {/* Form */}
                            <form>
                                <h2 className={"fs-4"}>Detalles de facturación</h2>
                                <input
                                    className={"border border-1 border-opacity-25 w-100"}
                                    style={{padding: '16px 8px 16px 8px'}}
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Name"
                                />
                                <input
                                    className={"border border-1 border-opacity-25 w-100"}
                                    style={{marginTop: '24px', padding: '16px 8px 16px 8px'}}
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Surname"
                                />
                                <input
                                    className={"border border-1 border-opacity-25 w-100"}
                                    style={{marginTop: '24px', padding: '16px 8px 16px 8px'}}
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Telephone (min 7 numbers)"
                                />
                                <input
                                    className={"border border-1 border-opacity-25 w-100"}
                                    style={{marginTop: '24px', padding: '16px 8px 16px 8px'}}
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className={"border border-1 border-opacity-25 w-100"}
                                    style={{marginTop: '24px', padding: '16px 8px 16px 8px'}}
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail Confirm"
                                />
                            </form>

                            {/* If inputs are fulled, the payment button will be enabled and appears the ID button*/}
                            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                ? (
                                    // enabled
                                    <>
                                    <input 
                                        onClick={() => { orderHandler(); emptyCart()}} 
                                        className={"w-100"}
                                        style={{marginTop: '24px', paddingTop:'12px', paddingBottom:'12px'}}
                                        type="submit" 
                                        value="Make the payment" 
                                    />
                                    {/* Id button called "See Purchase ID" (to see the purchase order id after it is done) */}
                                    <input 
                                        onClick={() => { showId()}} 
                                        className={"w-100"}
                                        style={{marginTop: '24px', paddingTop:'12px', paddingBottom:'12px'}}
                                        type="submit" 
                                        value="See Purchase ID" 
                                    />
                                    </>
                                ) : (
                                    // disabled
                                    <input 
                                        className={"w-100"}
                                        style={{marginTop: '24px', paddingTop:'12px', paddingBottom:'12px'}}
                                        type="submit" 
                                        value="Proceder al pago" 
                                        disabled 
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div><br />
        <Footer />

        </>
    )
}

export default CheckoutPage