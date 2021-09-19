import React from 'react';
import './Product.css'
const Product = (props) => {
    //console.log(props);
   const {img, name, seller,stock, price} = props.product;
    return (
        <div className="product">
            <div>
              <img src={img} alt=""/>
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>Only {stock} left in stock - Order Now</small></p>
            <button
            
            className="main-button" onClick={ () => props.handleAddProduct(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;