import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
console.log(cart)
   let total = 0;
   let shipping= 0;
   for(let product of cart){
      total= total + product.price;
      shipping = shipping + product.shipping;
   }
let tax = (total*0.2).toFixed(2);



    return (
        <div className='cart'>
             <h3>order summary</h3>
            <p>selected items:{cart.length}</p>
            <p>price{total}</p>
            <p>tax{tax}</p>
            <p>shipping{shipping}</p>
            <h4>grand total</h4>
        </div>
    );
};

export default Cart;