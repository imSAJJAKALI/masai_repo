import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <div>
                <strong>Name:</strong> {product.name}
              </div>
              <div>
                <strong>Brand:</strong> {product.brand}
              </div>
              <div>
                <strong>Image:</strong> {product.image}
              </div>
              <div>
                <strong>Price:</strong> {product.price}
              </div>
              <div>
                <strong>Gender:</strong> {product.gender}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
