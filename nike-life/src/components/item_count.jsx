import React from 'react'
import { useState} from 'react'

export default function Count({stock}) {
    let [count, setCount] = useState(1);

  return (
      <>
    <div className=" container input-group mb-3">
        <button className="btn btn-outline-secondary" style= {{"textAlign": "center", "borderRadiuos": "15px"}} type="button" onClick={() => setCount(count - 1)} disabled= {count === 1}>-</button>
        <input type="text" className="form-control" placeholder={count} style= {{"textAlign": "center"}} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        <button className="btn btn-outline-secondary" style= {{"textAlign": "center", "borderRadiuos": "15px"}} type="button" onClick={() => setCount(count + 1)} disabled= {count === stock}>+</button>
        <div>
            <button className="btn btn-danger" type="button" onClick={() => setCount(1)} disabled= {stock === 0} >Add to cart</button>
        </div>
    </div>
    </>
  )
}