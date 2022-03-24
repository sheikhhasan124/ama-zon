import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleAddToCart}) => {
    // console.log(props.product)
    // console.log(props)
  const {name,img,seller,ratings,price} = product;


    return (
        <div className='product'>
            <img src={img} alt={img} />
          <div className="product-info">
          <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}stars</small></p>
          </div>
          <button onClick={()=>handleAddToCart(product)}  className='btn-cart'>
              <p className='btn-text'>add to cart</p>
              <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;