import React, {useState, useEffect} from 'react'
import Card from './card';
import logo from '../nike_logo.png';


function useFetch() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products/product_detail.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    console.log(products)
  return products
}



function ProductsList() {

    const products = useFetch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <>
            <div className='d-flex justify-content-around mainContent flex-wrap'>
                {
                    loading ?
                    <>
                    <div className="d-flex align-items-center">
                    <h4>Waiting for the products...</h4>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>   
                    <img src={logo} style={{"width": "100%", "maxHeight": "300px", "maxWidth": "400px"}} alt="pageLogo"></img>              
                    </>

                    :

                    products.map((shoes) => {
                    return <Card 
                    key={shoes.id} 
                    product={shoes.product} 
                    img={shoes.img} 
                    description={shoes.description}
                    price={shoes.price}
                    currency={shoes.currency}
                    quantity={shoes.quantity} />
                })}
            </div>
        </>
    )
}

export default ProductsList