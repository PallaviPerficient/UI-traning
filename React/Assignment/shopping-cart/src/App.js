import './App.css';
import data from "./Component/Backend/Data";
import Header from './Component/Frontend/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Component/Frontend/Routes/Routing';
import { useState } from 'react';

const App = ()=> {
  const {productItems} = data ;
  const [cartItems , setCartItem] = useState([]);
  const [registrationList, setregistrationList] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItem(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist , quantity:ProductExist.quantity+1} : item));
    }else{
         setCartItem([...cartItems,{...product,quantity:1}])
      }
    }

    const handleRemoveProduct = (product) =>{
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if(ProductExist.quantity === 1){
        setCartItem(cartItems.filter((item) => item.id !== product.id))
      }else{
        setCartItem(
          cartItems.map((item) => item.id === product.id ? {...ProductExist , quantity: ProductExist.quantity -1 } : item)
        )
      }

    }

    const handleCartCleareance = () =>{
      console.log("clearr");
      setCartItem([]);
    }
  

    const submitHandler = (fName, lName , add , dob, edu, mob) => {
      alert(" Account Created ")
      setregistrationList((prevUsersList) => {
        return [
          ...prevUsersList,
          { firstname: fName, lastname: lName, Address : add , DOBirth :dob ,Education : edu , Mobile :mob },
        ];
      });
    };

   return (
    <div className='main-container'>
      <BrowserRouter>
        <Header  cartItems={cartItems}/>
        <Routing productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartCleareance={handleCartCleareance}  submitHandler={submitHandler}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
