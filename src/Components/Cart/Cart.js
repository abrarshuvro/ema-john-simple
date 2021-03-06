import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        totalPrice = totalPrice + product.price;
        
    }
let shipping = 0;
if(totalPrice > 35){
    shipping=0;
}
if(totalPrice > 15){
    shipping = 4.99;
}
else if(totalPrice > 0){
    shipping = 12.99;
}
const tax = (totalPrice /10);
const grandetotal = (totalPrice+ shipping + tax);
    

const formatNumber = num => {
    const precision  = num.toFixed(2)
    return Number(precision);
}
    return (
        <div>
            <h4>order summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>TAX + VAT: {formatNumber(tax)}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {formatNumber(grandetotal)}</p>
        </div>
    );
};

export default Cart;