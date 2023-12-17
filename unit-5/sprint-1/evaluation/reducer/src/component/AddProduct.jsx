import React, { useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/formReducer";
import { productReducer } from "../reducers/productReducer";

const AddProduct = () => {
  const [form, dispatch] = useReducer(formReducer, initialFormState);
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    productDispatch({ type: "ADD_PRODUCT", payload: form });
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form data-testid="input-form" onSubmit={handleSubmit}>
        <div className="name-wrapper" data-testid="name-wrapper">
          <label>Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="brand-wrapper" data-testid="brand-wrapper">
          <label>Brand:</label>
          <input
            type="text"
            value={form.brand}
            onChange={(e) =>
              dispatch({ type: "BRAND", payload: e.target.value })
            }
          />
        </div>

        <div className="image-wrapper" data-testid="image-wrapper">
          <label>Image:</label>
          <input
            type="text"
            value={form.image}
            onChange={(e) =>
              dispatch({ type: "IMAGE", payload: e.target.value })
            }
          />
        </div>

        <div className="price-wrapper" data-testid="price-wrapper">
          <label>Price:</label>
          <input
            type="number"
            value={form.price}
            onChange={(e) =>
              dispatch({ type: "PRICE", payload: e.target.value })
            }
          />
        </div>

        <div className="gender-wrapper" data-testid="gender-wrapper">
          <label>Gender:</label>
          <select
            data-testid="gender-select"
            value={form.gender}
            onChange={(e) =>
              dispatch({ type:"GENDER", payload: e.target.value })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="kids">Kids</option>
              </select>
            </div>
    
            <button type="submit">Add Product</button>
          </form>
        </div>
      );
    };
    
    export default AddProduct;
    
