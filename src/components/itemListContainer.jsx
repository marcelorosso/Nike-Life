import React, {useState, useEffect} from 'react'
import Card from './card';
import logo from '../nike_logo.png';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const useFetch = () => {

    const {catId} = useParams()

    const [products, setDetail] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        if (catId) {
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        const queryCollectionFilter = query(queryCollection, where("brand_name","==", catId))
        getDocs(queryCollectionFilter)
        .then(data => setDetail( data.docs.map(item => ({id: item.id, ...item.data()}))))
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 2000)
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, "products")
            getDocs(queryCollection)
            .then(data => setDetail( data.docs.map(item => ({id: item.id, ...item.data()}))))
            setLoading(true)
            setTimeout(()=> {
                setLoading(false)
            }, 2000) 
        }
    }, [catId])

  return [products, loading]
}


function ProductsList() {

    const [products, loading] = useFetch()

    return (
        <>
            <div className='d-flex justify-content-around mainContent flex-wrap'>
                {
                    loading ?
                    <>
                    <div className="d-flex align-items-center">
                    <h4>Waiting for the products list...</h4>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>   
                    <img src={logo} style={{"width": "100%", "maxHeight": "300px", "maxWidth": "400px"}} alt="pageLogo"></img>              
                    </>

                    :

                    products.map((shoes, index) => {
                    return <Card 
                    key={index}
                    id={shoes.id} 
                    name={shoes.name} 
                    grid_picture_url={shoes.grid_picture_url} 
                    retail_price_cents={shoes.retail_price_cents}/>
                    })
                }    
            </div>
        </>
    )
}

export default ProductsList