import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartCleareance}) => {
  console.log("cartItems card", cartItems);
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
   <>
     {cartItems.length === 0 ? (
      <div className="cart-items-empty">No Item Added </div>
    ) : <div className="cart-items">
    <h2 className="cart-items-header">Cart Items</h2>
    <div className="clear-cart" onClick={handleCartCleareance}>{cartItems.length >=1 && (
      <button className="clear-cart-button"> Clear Cart</button>
    )} 
    </div>
    

    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-list">
          <img className="cart-items-image" src={item.image} alt={item.name} />
          <div className="cart-items-name"> {item.name} </div>

          <div className="cart-items-function">
            <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>

            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)} >-</button>
          </div>
          <div className='cart-items-price'>Count {item.quantity} -- Price: {item.price}</div>
        </div>
      ))}
    </div>
    <div className='cart-items-total-price-name'> Total price
      <div className='cart-items-total-price'>Total Amount {totalPrice}</div>
  </div>
  </div>}
   </>
    
  );
};

export default Cart;
