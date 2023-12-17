const initialProductState = {
    products: [],
  };
  
  const productReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_PRODUCT":
        return { ...state, products: [...state.products, payload] };
      default:
        return state;
    }
  };
  
  export { productReducer, initialProductState };
  