import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick='onRemove'>−</button>
        <button onClick='onAdd'>+</button>
      </div>
    </li>
  );
};

export default CartItem;