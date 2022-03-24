import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
const [products, setProducts]= useState([])
const [cart,setCart]=useState([])

const handleAddToCart=(product)=>{
    // console.log(product)
    const newCart = [...cart,product];
    setCart(newCart)
    addToDb(product.id)
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
           <Cart cart={cart}/>
           </div>
        </div>
    );
};

export default Shop;