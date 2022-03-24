import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
const [product, setProducts]= useState([])

useEffect(()=>{
fetch('fakeData/products.json')
.then(res=>res.json())
.then(data=> setProducts(data))
},[])

    return (
        <div className='shop-container'>
           <div className="product-container">
               <h3>for product6 {product.length}</h3>
           </div>
           <div className="cart-container">
            <h3>order summary</h3>
           </div>
        </div>
    );
};

export default Shop;