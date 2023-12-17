import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";
import { formReducer, initialFormState } from "../reducers/formReducer";
import { SingleProduct } from "../component/SingleProduct";

const formState = {
  name: "",
  brand: "",
  image: "",
  price: 0,
  gender: "",
};

const productState = {
  products: [],
};

describe("React Form Component Testing", () => {
  beforeAll(() => {
    global.score = 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  beforeEach(() => {
    cleanup();
    const defaultFormState = productReducer(initialProductState, {
      type: "not-present",
    });
    expect(defaultFormState).toStrictEqual(productState);
  });

  it("Product reducer initialstate should match the initial state as per problem", () => {
    expect(initialProductState).toStrictEqual(productState);
    global.score += 1;
  });

  it("Form reducer initialstate should match the initial state as per problem", () => {
    expect(initialFormState).toStrictEqual(formState);
    global.score += 1;
  });

  it("Form Reducer should update on typing name in the input box", () => {
    render(<App />);
    const nameInput = screen
      .getByTestId("name-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(nameInput, { target: { value: "Product-1" } });
    expect(nameInput).toHaveValue("Product-1");

    const newState = formReducer(initialFormState, {
      type: "NAME",
      payload: "Product-1",
    });
    expect(newState).toStrictEqual({ ...formState, name: "Product-1" });
    global.score += 1;
  });

  it("Form reducer should update on typing brand in the input box", () => {
    render(<App />);
    const brandInput = screen
      .getByTestId("brand-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(brandInput, { target: { value: "Puma" } });
    expect(brandInput).toHaveValue("Puma");

    const newState = formReducer(initialFormState, {
      type: "BRAND",
      payload: "Puma",
    });

    expect(newState).toStrictEqual({ ...initialFormState, brand: "Puma" });
    global.score += 1;
  });

  it("Form reducer should update on typing image in the input box", () => {
    render(<App />);
    const imageInput = screen
      .getByTestId("image-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(imageInput, {
      target: {
        value: "https://placehold.co/600x400",
      },
    });
    expect(imageInput).toHaveValue("https://placehold.co/600x400");

    const newState = formReducer(initialFormState, {
      type: "IMAGE",
      payload: "https://placehold.co/600x400",
    });

    expect(newState).toStrictEqual({
      ...formState,
      image: "https://placehold.co/600x400",
    });
    global.score += 1;
  });

  it("Form reducer should update on typing price in the input box", () => {
    render(<App />);
    const priceInput = screen
      .getByTestId("price-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(priceInput, {
      target: {
        value: 4999,
      },
    });
    expect(priceInput).toHaveValue(4999);

    const newState = formReducer(initialFormState, {
      type: "PRICE",
      payload: 4999,
    });

    expect(newState).toStrictEqual({
      ...formState,
      price: 4999,
    });
    global.score += 1;
  });

  it("Form reducer should update on selecting gender from the options", () => {
    render(<App />);
    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Male",
      })
    );
    expect(screen.getByRole("option", { name: "Male" }).selected).toBe(true);

    const newState = formReducer(initialFormState, {
      type: "GENDER",
      payload: "male",
    });

    expect(newState).toStrictEqual({ ...formState, gender: "male" });
    global.score += 1;
  });

  it("Form is present with proper input fields to take input of product-data", () => {
    render(<App />);
    const inputForm = screen.getByTestId("input-form");
    expect(inputForm).toBeInTheDocument();

    const nameInput = screen
      .getByTestId("name-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(nameInput, { target: { value: "Product-1" } });
    expect(nameInput).toHaveValue("Product-1");

    const brandInput = screen
      .getByTestId("brand-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(brandInput, { target: { value: "Puma" } });
    expect(brandInput).toHaveValue("Puma");

    const imageInput = screen
      .getByTestId("image-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(imageInput, {
      target: {
        value: "https://placehold.co/600x400",
      },
    });
    expect(imageInput).toHaveValue("https://placehold.co/600x400");

    const priceInput = screen
      .getByTestId("price-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(priceInput, {
      target: {
        value: 4999,
      },
    });
    expect(priceInput).toHaveValue(4999);

    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Female",
      })
    );
    expect(screen.getByRole("option", { name: "Female" }).selected).toBe(true);

    global.score += 1;
  });

  it(`Product Reducer state should update on adding product`, () => {
    const newProduct = {
      name: "Product-1",
      brand: "Puma",
      image: "https://placehold.co/600x400",
      price: 599,
      gender: "male",
    };
    const newState = productReducer(initialProductState, {
      type: "ADD_PRODUCT",
      payload: newProduct,
    });
    expect(newState).toStrictEqual({ ...productState, products: [newProduct] });
    global.score += 1;
  });

  it("The added Products should be displayed on the dom", () => {
    render(<App />);
    const inputForm = screen.getByTestId("input-form");
    expect(inputForm).toBeInTheDocument();

    const nameInput = screen
      .getByTestId("name-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(nameInput, { target: { value: "Product-1" } });
    expect(nameInput).toHaveValue("Product-1");

    const brandInput = screen
      .getByTestId("brand-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(brandInput, { target: { value: "Puma" } });
    expect(brandInput).toHaveValue("Puma");

    const imageInput = screen
      .getByTestId("image-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(imageInput, {
      target: {
        value: "https://placehold.co/600x400",
      },
    });
    expect(imageInput).toHaveValue("https://placehold.co/600x400");

    const priceInput = screen
      .getByTestId("price-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(priceInput, {
      target: {
        value: 4999,
      },
    });
    expect(priceInput).toHaveValue(4999);

    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Female",
      })
    );
    expect(screen.getByRole("option", { name: "Female" }).selected).toBe(true);

    fireEvent.submit(inputForm);

    expect(screen.getAllByTestId("product-name")[0]).toHaveTextContent(
      "Product-1"
    );

    expect(screen.getAllByTestId("product-brand")[0]).toHaveTextContent("Puma");

    global.score += 2;
  });

  it(`Required Proptypes should be defined for all the props in SingleProduct component`, () => {
    jest.spyOn(console, "error");
    render(<SingleProduct price="355" />);
    expect(console.error).toBeCalledTimes(2);
    global.score += 1;
  });

  it(`SingleProduct card class should be set as per gender for backgroung colour`, () => {
    const { container } = render(<SingleProduct price={399} gender="male" />);
    const elements = container.getElementsByClassName("blue");
    expect(elements.length).toBe(1);
    global.score += 1;
  });
});
