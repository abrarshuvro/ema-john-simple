import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);
   
    const handleaddproduct = (product) =>{
       
        const newCart = [...cart , product];
        setCart(newCart)
    }
   
    return (
        <div className="shop-container">
           <div className="product-container">
        
            {
                products.map(pd => <Product
                handleAddProduct = {handleaddproduct}
                     product={pd}>

                     </Product>)
            }
        
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
               
           </div>
        </div>
    );
};

export default Shop;