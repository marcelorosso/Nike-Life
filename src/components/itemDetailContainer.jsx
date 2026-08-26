import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import localProducts from '../data/products';
import Details from './itemDetail';

function useFetchDetail() {
    const { id } = useParams()
    const [productDetail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const queryCollection = collection(db, "products")
        const queryCollectionFilter = query(queryCollection, where("id", "==", parseFloat(id)))

        getDocs(queryCollectionFilter)
            .then(data => {
                const firestoreProducts = data.docs.map(item => ({ id: item.id, ...item.data() }))
                if (firestoreProducts.length > 0) {
                    setDetail(firestoreProducts)
                } else {
                    // Fallback: buscar en datos locales
                    const localProduct = localProducts.find(p => p.id === parseInt(id))
                    setDetail(localProduct ? [localProduct] : [])
                }
                setLoading(false)
            })
            .catch(() => {
                // Fallback: si Firestore falla, usar datos locales
                const localProduct = localProducts.find(p => p.id === parseInt(id))
                setDetail(localProduct ? [localProduct] : [])
                setLoading(false)
            })
    }, [id])

    return [productDetail, loading]
}

export default function ProductsDetail() {
    const [productDetail, loading] = useFetchDetail()

    return (
        <>
            <div>
                {loading ? (
                    <div className="loading-container">
                        <div className="spinner-border" role="status" aria-hidden="true"></div>
                        <h4>Loading product details...</h4>
                    </div>
                ) : (
                    productDetail.map((detail, index) => (
                        <Details
                            key={detail.id || index}
                            id={detail.id}
                            name={detail.name}
                            main_picture_url={detail.main_picture_url}
                            story_html={detail.story_html}
                            size_range={detail.size_range}
                            retail_price_cents={detail.retail_price_cents}
                            quantity={detail.quantity}
                            color={detail.color}
                            designer={detail.designer}
                            details={detail.details}
                            productDetail={detail}
                        />
                    ))
                )}
            </div>
        </>
    )
}
