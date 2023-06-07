import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
const Routing = ({productItems , cartItems ,handleAddProduct ,handleRemoveProduct ,handleCartCleareance ,submitHandler}) => {
  return (
    <div>
        <Routes>
             <Route path="/" element={<Products productItems={productItems}  handleAddProduct={handleAddProduct}/>} />
             <Route path="/signup" element={<Signup submitHandler={submitHandler}/>} />
             <Route path="/cart" element={<Cart  cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartCleareance={handleCartCleareance}/>} />
        </Routes>
    </div>
  )
}

export default Routing;