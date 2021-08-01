import React, { Component } from 'react';
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';
const CheckoutProduct = ({id, title, image, rating, price}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
              id:id
          }
        })
    }
    return ( 
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>🌟</p>
                    ))}
                    
                </p>
               <button onClick={removeFromCart} className="checkoutProduct__remove">Remove from cart</button>    
            </div>
            
        </div>
     );
}
 
export default CheckoutProduct;