import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
const [products, setProducts]= useState([])

const handleAddToCart=(product)=>{
    console.log(product)
}

useEffect(()=>{
fetch('fakeData/products.json')
.then(res=>res.json())
.then(data=> setProducts(data))
},[])

    return (
        <div className='shop-container'>
           <div className="product-container">
              {products.map(product=> 
              <Product key={product.id} 
              handleAddToCart={handleAddToCart}
              product={product}
              />)}
           </div>
           <div className="cart-container">
            <h3>order summary</h3>
           </div>
        </div>
    );
};

export default Shop;