import React, { useState, useEffect } from 'react'
import Card from './card';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import localProducts from '../data/products';

export const useFetch = () => {
    const { catId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const queryCollection = collection(db, "products")

        const firestoreQuery = catId
            ? query(queryCollection, where("brand_name", "==", catId))
            : queryCollection

        getDocs(firestoreQuery)
            .then(data => {
                const firestoreProducts = data.docs.map(item => ({ id: item.id, ...item.data() }))
                if (firestoreProducts.length > 0) {
                    setProducts(firestoreProducts)
                } else {
                    // Fallback: si Firestore esta vacio, usar datos locales
                    const fallback = catId
                        ? localProducts.filter(p => p.brand_name === catId)
                        : localProducts
                    setProducts(fallback)
                }
                setLoading(false)
            })
            .catch(() => {
                // Fallback: si Firestore falla, usar datos locales
                const fallback = catId
                    ? localProducts.filter(p => p.brand_name === catId)
                    : localProducts
                setProducts(fallback)
                setLoading(false)
            })
    }, [catId])

    return [products, loading]
}

function ProductsList() {
    const [products, loading] = useFetch()

    return (
        <>
            <div className="section-header">
                <h2>Our Collection</h2>
                <p>Explore the latest and most iconic sneakers</p>
            </div>
            <div className="mainContent">
                {loading ? (
                    <div className="loading-container" style={{ gridColumn: '1 / -1' }}>
                        <div className="spinner-border" role="status" aria-hidden="true"></div>
                        <h4>Loading products...</h4>
                    </div>
                ) : (
                    products.map((shoes, index) => (
                        <Card
                            key={shoes.id || index}
                            id={shoes.id}
                            name={shoes.name}
                            grid_picture_url={shoes.grid_picture_url}
                            retail_price_cents={shoes.retail_price_cents}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default ProductsList
