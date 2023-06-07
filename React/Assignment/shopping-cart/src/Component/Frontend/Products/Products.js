import React from "react";
import "./Products.css";

const Products = ({productItems , handleAddProduct}) => {
  console.log("productItems", productItems);
  return (
    <div className="products">
      {productItems.map((productItems) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItems.image}
              alt={productItems.name}
            />
          </div>

          <div>
            <h3 className="product-name"> {productItems.name}</h3>
          </div>

          <div className="product-price">Price: {productItems.price}</div>

          <div  onClick={() => handleAddProduct(productItems)}>
            <button className="button-addtocart"> Add to Cart </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
