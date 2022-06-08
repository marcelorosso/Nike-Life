import React, {useState} from 'react'
import Card from './card';

function ProductsList() {
    const [products] = useState([
        {
            id: 1,
            product: "Air Force",
            description: "Coming Soon",
            price: 22000,
            currency: "$",
            quantity: 10,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TQve6uv7Z3KCPsWwhftLn_dlvgIZjy_skcGbRyP2ZXWTOXvb38V6ph7CIEz5EcVvR4M&usqp=CAU"
        },
        {
            id: 2,
            product: "Air Jordan",
            description: "Coming Soon",
            price: 30000,
            currency: "$",
            quantity: 8,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBh3re2R56RNZVIgw_GL4JH9afCFO5tDO9KL3doLaswcL85aVtgA8ES4x7gtnkTMWXwDk&usqp=CAU'
        },
        {
            id: 3,
            product: "Air Max",
            description: "Coming Soon",
            price: 25000,
            currency: "$",
            quantity: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48f5omNaB97Hnt2Zcz5q_6SXYBiFWVbKBpg&usqp=CAU'
        },
        {
            id: 4,
            product: "Sb Zoom",
            description: "Coming Soon",
            price: 18000,
            currency: "$",
            quantity: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvh_74LgLEPpVvvhDrybAxUB9scwMBdA5UOwZXbr6R02MW5QeRYrUePPZeJUkiIm25gJo&usqp=CAU'
        }    
    ]);

    return (
        <>
            <div className='d-flex justify-content-around mainContent flex-wrap'>
                {products.map((shoes) => {
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