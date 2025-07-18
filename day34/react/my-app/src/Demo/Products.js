import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    const ProductLists=[
        {id:101,pname:'IPHONE',pprice:9999},
        {id:102,pname:'SAMSUNG',pprice:5555},
        {id:103,pname:'Realme',pprice:3333},
        {id:104,pname:'IPHONE',pprice:88888},
    ]
  return (
    <div>
        <h2>Product</h2>
        <hr/>
        <ul style={{textAlign:'left'}}>
      {ProductLists.map(product=>
            <li key={product.id}> 
            <Link to={`/products/${product.id}`}>
            {product.pname}
            </Link>
        </li>
      )}
      </ul>
    </div>
  )
}

export default Products