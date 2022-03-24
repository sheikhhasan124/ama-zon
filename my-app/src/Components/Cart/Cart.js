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
//    toFixed give a strign so it should be convert into number 
let tax = parseFloat((total*0.2).toFixed(2));
let grandTotal =  total + shipping + tax;


    return (
        <div className='cart'>
             <h3>order summary</h3>
            <p>selected items:{cart.length}</p>
            <p>price{total}</p>
            <p>tax{tax}</p>
            <p>shipping{shipping}</p>
            <h4>grand total${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;