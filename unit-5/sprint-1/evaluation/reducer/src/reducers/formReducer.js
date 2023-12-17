const initialFormState = {
    name: "",
    brand: "",
    image: "",
    price: 0,
    gender: "",
  };
  
  const formReducer = (state, { type, payload }) => {
    switch (type) {
      case "NAME":
        return { ...state, name: payload };
      case "BRAND":
        return { ...state, brand: payload };
      case "IMAGE":
        return { ...state, image: payload };
      case "PRICE":
        return { ...state, price: payload };
      case "GENDER":
        return { ...state, gender: payload };
      case "RESET":
        return initialFormState;
      default:
        return state;
    }
  };
  
  export { formReducer, initialFormState };
  