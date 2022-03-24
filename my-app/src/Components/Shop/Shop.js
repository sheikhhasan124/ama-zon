import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
const [products, setProducts]= useState([])
const [cart,setCart]=useState([])


useEffect(()=>{
fetch('fakeData/products.json')
.then(res=>res.json())
.then(data=> setProducts(data))
},[])

useEffect(()=>{
const storedCart = getStoreCart()
for(let id in storedCart){
    const addedProduct = products.find(product=> product.id === id)
    console.log(addedProduct)
}
},[])


const handleAddToCart=(product)=>{
    // console.log(product)
    const newCart = [...cart,product];
    setCart(newCart)
    addToDb(product.id)
}

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