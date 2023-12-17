import React from "react";
import PropTypes from "prop-types";

const SingleProduct = ({ name, brand, image, price, gender }) => {
  const getColorClass = (gender) => {
    switch (gender) {
      case "male":
        return "blue";
      case "female":
        return "pink";
      case "kids":
        return "teal";
      default:
        return "";
    }
  };

  const colorClass = getColorClass(gender);

  return (
    <div className={`single-product ${colorClass}`}>
      <div data-testid="product-image">Image: {image}</div>
      <div data-testid="product-name">Name: {name}</div>
      <div data-testid="product-brand">Brand: {brand}</div>
      <div data-testid="product-price">Price: {price}</div>
    </div>
  );
};

SingleProduct.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gender: PropTypes.oneOf(["male", "female", "kids"]).isRequired,
};

export default SingleProduct;
