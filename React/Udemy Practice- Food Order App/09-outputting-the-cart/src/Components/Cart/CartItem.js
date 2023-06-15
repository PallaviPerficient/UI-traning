import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary-cartitem'>
          <span className='price-cartitem'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions-cartitem'>
        <button onClick='onRemove'>−</button>
        <button onClick='onAdd'>+</button>
      </div>
    </li>
  );
};

export default CartItem;