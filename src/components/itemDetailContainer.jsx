import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import logo from '../nike_logo.png';
import Details from './itemDetail';


function useFetchDetail() {

    const {id} = useParams()
    console.log(id)

    const [productDetail, setDetail] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        if (id) {
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        const queryCollectionFilter = query(queryCollection, where("id","==", parseFloat(id)))
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
    }, [id])

  return [productDetail, loading]
}


export default function ProductsDetail() {

    const [productDetail, loading] = useFetchDetail()
    
    return (
        <>
            <div>
                {
                    loading ?
                    <>
                    <div className='d-flex justify-content-around'>
                        <div className="d-flex align-items-center">
                        <h4>Waiting for the product Details...</h4>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>   
                        <img src={logo} style={{"width": "100%", "maxHeight": "300px", "maxWidth": "400px"}} alt="pageLogo"></img>   
                    </div>           
                    </>

                    :

                    productDetail.map((detail, index) => {
                        return <Details 
                        key={index}
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

                        productDetail ={detail}/>
                    })
                }
            
            </div>
        </>
    )
}
