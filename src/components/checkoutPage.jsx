import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import {addOrder} from "../firebase/firebaseClient"
import { Link } from "react-router-dom"
import { formatPrice } from './formatPrice'

const CheckoutPage = () => {

    //Cart Context
    const {cartItems, cartLenght, getTotal, emptyCart} = useContext(CartContext)


    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    // Expresiones regulares para los campos e-mail y teléfono
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    // Obtener información acerca de la fecha en que se realizó la compra
    const orderDate = new Date().toLocaleDateString()

     // Obtener los datos del cliente
     const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    // Generación de la orden, con información del cliente, los items, el precio y la fecha en que se realizó la compra
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
    }

    // Checkout Render
    return (
        <>
            {/* Contenedor checkout */}
            <div className=" d-flex justify-content-center align-items-center text-color" style={{marginLeft: '34.5px'}}>
                <div className="d-flex w-97 flex-column justify-content-center align-items-center">

                    {/* Título */}
                    <h1 className={ "align-self-start fs-3 text-secondary fw-semibold"}>Checkout</h1>
                    
                    {/* Información de la compra */}
                    <div className="d-flex w-100 justify-content-start align-items-start">
                        
                        {/* Resúmen */}
                        <div className="d-flex flex-column align-self-start w-100" style={{marginRight: '1.5rem'}}>
                            <h2 className={"fs-4"}>Resúmen</h2>
                            <div className="d-flex flex-column border border-opacity-25">
                                <div className={"d-flex justify-content-between text-secondary text-opacity-50"}>
                                    <p>Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className={"d-flex justify-content-between text-secondary text-opacity-50"}>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className={"d-flex justify-content-between text-secondary fw-semibold"}>
                                    <p>Total:</p>
                                    <p>{formatPrice(getTotal())}</p>
                                </div>
                            </div><br />
                            <Link to='/store' className=" d-flex flex-row align-items-center text-lowercase" style={{ textDecoration: 'none', color: 'gray' }}>
                                <img src="https://img.icons8.com/fluency-systems-filled/24/EBEBEB/double-left.png" alt="leftArrow" className="h-4 w-4 mr-1"/>
                                Return Store
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

                            {/* If inputs are fulled, the payment button will be enabled*/}
                            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                ? (
                                    // enabled
                                    <input 
                                        onClick={() => { orderHandler(); setShowModal(true) }} 
                                        className={"w-100"}
                                        style={{marginTop: '24px', paddingTop:'12px', paddingBottom:'12px'}}
                                        type="submit" 
                                        value="Proceder al pago" 
                                    />
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

            {/* Final modal container */}
            <div className={`${showModal ? "d-flex" : "hidden"}`}>
                <div className="container justify-content-center align-items-center">
                    <div className="d-flex flex-column text-family">
                        <h2 className={"fs-3 text-center text-secondary fw-semibold"}>¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className={"mt-6 text-center md:w-9/12 lg:w-7/12 "}>Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra <strong>ID: {idCompra}</strong>. Esperamos que hayas tenido una agradable experiencia en NIKE-LIFE. ¡Hasta la próxima!</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={emptyCart} className={"w-100 text-secondary text-opacity-50 cursor-pointer border border-1 border-opacity-25"} style={{marginTop: '10px', marginBottom: '10px', paddingTop:'12px', paddingBottom:'12px'}}>
                                Comeback Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CheckoutPage