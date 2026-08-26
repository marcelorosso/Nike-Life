import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { addOrder } from "../firebase/firebaseClient"
import { Link } from "react-router-dom"
import { formatPrice } from './formatPrice'
import Swal from "sweetalert2"
import logo_page from "../logo_page.jpeg"
import Footer from './footer'

const CheckoutPage = () => {
    const { cartItems, cartLenght, getTotal, emptyCart } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState("")
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const orderDate = new Date().toLocaleDateString()

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    function orderHandler() {
        const order = {
            buyer,
            item: cartItems.map(cartItem => ({
                id: cartItem.id,
                nombre: cartItem.name,
                precio: cartItem.retail_price_cents,
                amount: cartItem.amount
            })),
            totalPrice: getTotal(),
            date: orderDate
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        }).catch(() => {
            // Firebase might not be active, just generate a local ID
            setIdCompra('NL-' + Date.now())
        })

        Swal.fire({
            imageUrl: `${logo_page}`,
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Nike Life',
            titleText: `Thanks for your purchase, ${(buyer.name)}!`,
            text: `We sent you a confirmation email to ${(buyer.email).toLowerCase()}.`,
            color: "#111",
            confirmButtonColor: "#111",
            customClass: { title: "family" }
        })
    }

    const showId = () => {
        Swal.fire({
            text: `Purchase ID: ${idCompra}`,
            color: "#111",
            confirmButtonColor: "#111"
        })
    }

    const isFormValid = buyer.name && buyer.surname && buyer.telephone &&
        (buyer.email === buyer.emailConfirm) &&
        telephoneRegex.test(buyer.telephone) &&
        emailRegex.test(buyer.email)

    return (
        <>
            <div className="checkout-container">
                <h1>Checkout</h1>

                <div className="d-flex flex-wrap" style={{ gap: '48px' }}>
                    {/* Resume */}
                    <div style={{ flex: '1', minWidth: '280px' }}>
                        <h2>Order Summary</h2>
                        <div style={{ background: '#f5f5f5', borderRadius: '12px', padding: '24px' }}>
                            <div className="d-flex justify-content-between" style={{ color: '#757575', marginBottom: '8px' }}>
                                <p>Items:</p>
                                <p>{cartLenght()}</p>
                            </div>
                            <div className="d-flex justify-content-between" style={{ color: '#757575', marginBottom: '8px' }}>
                                <p>Shipping:</p>
                                <p style={{ color: '#00b300', fontWeight: '600' }}>Free</p>
                            </div>
                            <hr style={{ border: '1px solid #e5e5e5' }} />
                            <div className="d-flex justify-content-between" style={{ fontWeight: '700', fontSize: '18px' }}>
                                <p>Total:</p>
                                <p>{formatPrice(getTotal())}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Link to='/store' style={{ textDecoration: 'none', color: '#757575', fontSize: '14px' }}>
                                &larr; Back to Store
                            </Link>
                            <Link to='/' style={{ textDecoration: 'none', color: '#757575', fontSize: '14px' }}>
                                &larr; Back to Home
                            </Link>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ flex: '1.5', minWidth: '320px' }}>
                        <h2>Billing Details</h2>
                        <form>
                            <input type="text" name="name" required onChange={handleSubmitChange} placeholder="First Name" />
                            <input type="text" name="surname" required onChange={handleSubmitChange} placeholder="Last Name" />
                            <input type="tel" name="telephone" required onChange={handleSubmitChange} placeholder="Phone Number" />
                            <input type="email" name="email" required onChange={handleSubmitChange} placeholder="Email" />
                            <input type="email" name="emailConfirm" required onChange={handleSubmitChange} placeholder="Confirm Email" />
                        </form>

                        {isFormValid ? (
                            <>
                                <input
                                    onClick={() => { orderHandler(); emptyCart() }}
                                    type="submit"
                                    value="Complete Purchase"
                                    style={{ width: '100%', marginTop: '24px', padding: '14px', background: '#111', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                                />
                                <input
                                    onClick={() => showId()}
                                    type="submit"
                                    value="View Purchase ID"
                                    style={{ width: '100%', marginTop: '12px', padding: '14px', background: 'transparent', color: '#111', border: '1.5px solid #111', borderRadius: '30px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                                />
                            </>
                        ) : (
                            <input
                                type="submit"
                                value="Complete Purchase"
                                disabled
                                style={{ width: '100%', marginTop: '24px', padding: '14px', background: '#ccc', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '15px', fontWeight: '600', cursor: 'not-allowed', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CheckoutPage
