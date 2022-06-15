import React, {useState, useEffect} from 'react'
import logo from '../nike_logo.png';
import Details from './itemDetail';

function useFetchDetail() {

    const [productDetail, setDetail] = useState([])

    const getData = () => {
        fetch("products/sneakers.json")
        .then(response => response.json())
        .then(data => setDetail(data))
    }
    
    useEffect(() => {
        getData()
    }, [])

  console.log(productDetail)

  return productDetail
}


export default function ProductsDetail() {

    const productDetail = useFetchDetail()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            <div className='d-flex justify-content-around mainContent flex-wrap'>
                {
                    loading ?
                    <>
                    <div className="d-flex align-items-center">
                    <h4>Waiting for the product Details...</h4>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>   
                    <img src={logo} style={{"width": "100%", "maxHeight": "300px", "maxWidth": "400px"}} alt="pageLogo"></img>              
                    </>

                    :

                    productDetail.map((detail) => {
                    return <Details 
                    id={detail.id} 
                    name={detail.name} 
                    main_picture_url={detail.main_picture_url} 
                    size_range={detail.size_range.map((data, index) => {
                        return <li key={index}>{data.size_range}</li>
                    })}
                    story_html={detail.story_html}
                    retail_price_cents={detail.retail_price_cents}
                    quantity={detail.quantity} />
                })}
            </div>
        </>
    )
}
