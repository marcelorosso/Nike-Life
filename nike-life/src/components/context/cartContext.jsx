import {createContext} from "react"
import {useState} from "react"
import { useEffect } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productsInLocalStorage = localStorage.getItem("cartProducts")
            return ( productsInLocalStorage ? JSON.parse(productsInLocalStorage): [])
        }catch(error) {
            return []
        }
    })

    useEffect(()=> {
        localStorage.setItem("cartproducts", JSON.stringify(cartItems))
        console.log(cartItems)
    }, [cartItems])

    const emptyCart = () => {
        setCartItems([])
    }

    const addItemsToCart = (products) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === products.id)

        if(inCart) {
            setCartItems(cartItems.map((productInCart)=> {
                if(productInCart.id === products.id) {
                    return {...inCart, amount: inCart.amount + 1}
                }else return productInCart
            }))
        } else {
            setCartItems([...cartItems, {...products, amount: 1}])
        }
    
    }

    const deleteItemsFromCart = (products) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === products.id)

        if(inCart.amount === 1) {
            setCartItems(cartItems.filter((productInCart)=> productInCart.id !== products.id))
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                if (productInCart.id === products.id){
                    return {...inCart, amount: inCart.amount - 1}
                } else return productInCart
            }))
        }
    }

    // Obtener número total de items
    const cartLenght = () => {
        let quantity = 0
        cartItems.forEach((item) => {
            quantity = quantity + item.amount
        })
        return quantity
    }

    // Obtener el subtotal
    const getSubtotal = (price, quantity) => {
        let subtotal = 0
        subtotal = subtotal + (price * quantity)
        return Number(subtotal)
    }

    // Obtener el total
    const getTotal = () => {
        let total = 0
        cartItems.forEach((item) => {
            total = total + (item.amount * item.retail_price_cents)
        })
        return Number(total)
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemsToCart,
            deleteItemsFromCart,
            emptyCart,
            cartLenght,
            getSubtotal,
            getTotal
        }} 
        >
            {children}
        </CartContext.Provider>
    )
}
