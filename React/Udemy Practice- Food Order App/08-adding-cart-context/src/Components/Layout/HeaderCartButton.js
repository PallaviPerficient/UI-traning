import React from 'react';
import './HeaderCartButton.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberofCartItem  = cartCtx.items.reduce((curNumber ,item) =>{
    return curNumber + item.amount;
  }, 0);
  
  return (
    <button className="button" onClick={props.onClick}>
        <span className="icon">
        <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberofCartItem}</span>
    </button>
  )
}

export default HeaderCartButton