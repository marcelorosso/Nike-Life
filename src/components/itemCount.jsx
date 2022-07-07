import React from 'react'
import { useState} from 'react'

export default function Count({stock, onAdd}) {
    let [count, setCount] = useState(1);

    // Rest item
    const addCount = () => {
      if (count < stock) {
          setCount((prev) => prev + 1)
      }
  }

  // Plus item
  const minusCount = () => {
      if (count > 1) {
          setCount((prev) => prev - 1)
      }
  }


  return (
      <>
    <div className=" d-flex flex-column align-items-start" style= {{"gap": "20px"}}>
      <div className='d-flex align-items-center' style= {{"gap": "40px"}}>
        <div className='d-flex align-items-center w-80'>
          <span onClick={minusCount} className="btn btn-outline-secondary" style= {{"textAlign": "center"}}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input type="text" className="form-control" value={count} onChange={(e) => e.target.value} style= {{"textAlign": "center", "maxWidth": "80px"}} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
          <span onClick={addCount} className="btn btn-outline-secondary" style= {{"textAlign": "center", "borderTopRightRadius": "5px", "borderBottomRightRadius": "5px"}}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.1665V15.8332" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className='d-flex align-items-center'>
          <p>¡Últimas {stock - count} unidades!</p> 
        </div>
      </div>
      <div className='d-flex'>
        <button className="btn btn-dark" type="button" onClick={() => onAdd(count)} >Add to cart</button>
      </div>
    </div>
    </>
  )
}