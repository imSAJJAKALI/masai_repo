import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";
import { createMemoryHistory } from "history";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import AuthContextProvider from "../Context/AuthContext.jsx";
import fetchMock from "jest-fetch-mock";
import SingleProductPage from "../Routes/SingleProductPage.jsx";
import ProductsTable from "../Components/ProductsTable.jsx";
// import { expect } from "chai";
// npm install --save-dev jest-fetch-mock

/**
 *
 * DO NOT CHANGE ANYTHING HERE
 */
jest.setTimeout(60000);
beforeAll(() => {
  // attempt is 1
  global.score = 1;
  console.log("Resetting Score to 1");
  fetchMock.enableMocks();
});

beforeEach(() => {
  cleanup();
});

test("App loads correctly", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <MemoryRouter initialEntries={["/"]}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MemoryRouter>
  );

  const login = getByTestId("login-link");
  const home = getByTestId("home-link");
  expect(login).toHaveTextContent("Login Page");
  expect(home).toHaveTextContent("Home");
  global.score += 1;
});

test("ProductsTable Component exist", () => {
  render(
    <MemoryRouter>
      <ProductsTable data={page1} />
    </MemoryRouter>
  );
  const products = screen.getAllByTestId("item");
  expect(products.length).toBe(16);
  products.forEach((restaurant, i) => {
    const { brand, price, category } = ProductsRowElements(restaurant);
    expect(brand.textContent.trim()).toBe(page1[i].brand);
    expect(price.textContent.trim()).toBe(page1[i].price.toString());
    expect(category.textContent.trim()).toBe(page1[i].category.toString());
  });
});

test("Private Route component redirects user to login when visiting /dashboard page without log in", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MemoryRouter>
  );

  const form = getByTestId("login-form");
  expect(form).toBeInTheDocument();
  global.score += 1;
});

test("Private Route component redirects user to login when visiting /products/:id page without log in", async () => {
  const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MemoryRouter>
  );

  const form = getByTestId("login-form");
  expect(form).toBeInTheDocument();
  global.score += 1;
});
// login page

test("Login page works correctly", async () => {
  fetchMock
    .once(
      JSON.stringify({
        token: "ABCD",
      })
    )
    .once(JSON.stringify([]));
  const { debug, getByTestId, getAllByTestId, findByTestId } = render(
    <MemoryRouter initialEntries={["/login"]}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MemoryRouter>
  );

  const form = getByTestId("login-form");
  const email = getByTestId("email-input");
  const password = getByTestId("password-input");
  const submit = getByTestId("form-submit");

  expect(form).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  const values = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  fireEvent.change(email, {
    target: {
      value: values.email,
    },
  });

  fireEvent.change(password, {
    target: {
      value: values.password,
    },
  });

  expect(email.value).toBe(values.email);
  expect(password.value).toBe(values.password);
  await act(() => {
    fireEvent.click(submit);
  });
  const token = await findByTestId("user-token");
  expect(token).toHaveTextContent("ABCD");
  {
    const logout = getByTestId("logout-btn");
    await act(() => {
      fireEvent.click(logout);
    });
    const form = getByTestId("login-form");
    expect(form).toBeInTheDocument();
  }
  global.score += 4;
});

function getItemsInCard(card) {
  return {
    brand: card.querySelector("[data-testid='brand']"),
    category: card.querySelector("[data-testid='category']"),
    price: card.querySelector("[data-testid='price']"),
  };
}

test("should redirect to Dashboard page after successful log in", async () => {
  fetchMock
    .once(
      JSON.stringify({
        token: "ABCD",
      })
    )
    .once(JSON.stringify({ data: page1, totalPages: 1 }));

  const history = createMemoryHistory();
  const { debug, getByTestId, getAllByTestId, findByTestId, findAllByTestId } =
    render(
      <MemoryRouter history={history} initialEntries={["/login"]}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MemoryRouter>
    );
  {
    const form = getByTestId("login-form");
    const email = getByTestId("email-input");
    const password = getByTestId("password-input");
    const submit = getByTestId("form-submit");

    expect(form).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    const values = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    fireEvent.change(email, {
      target: {
        value: values.email,
      },
    });

    fireEvent.change(password, {
      target: {
        value: values.password,
      },
    });

    expect(email.value).toBe(values.email);
    expect(password.value).toBe(values.password);
    await act(() => {
      fireEvent.click(submit);
    });

    const token = await findByTestId("user-token");
    expect(token).toHaveTextContent("ABCD");
  }
  {
    await sleep(3000);
    const items = await findAllByTestId("item");
    expect(items.length).toBe(page1.length);
    page1.forEach((res, i) => {
      const { brand, category, price, image } = getItemsInCard(items[i]);
      expect(brand).toHaveTextContent(res.brand);
      expect(category).toHaveTextContent(res.category);
      expect(price).toHaveTextContent(res.price);
    });
  }

  global.score += 4;
});

test("Redirecting from Dashboard page to singleProduct page works correctly", async () => {
  fetchMock
    .once(
      JSON.stringify({
        token: "ABCD",
      })
    )
    .once(JSON.stringify({ data: page1, totalPages: 10 }))
    .once(
      JSON.stringify({
        data: {
          id: 1,
          brand: "Zebronics",
          img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfboat000113_1_cc965b26.jpg?rnd=20200526195200",
          price: 100,
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
          category: "Laptop",
        },
      })
    );

  const history = createMemoryHistory();

  const { debug, getByTestId, getAllByTestId, findByTestId, findAllByTestId } =
    render(
      <MemoryRouter history={history} initialEntries={["/login"]}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MemoryRouter>
    );
  {
    const form = getByTestId("login-form");
    const email = getByTestId("email-input");
    const password = getByTestId("password-input");
    const submit = getByTestId("form-submit");

    expect(form).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    const values = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    fireEvent.change(email, {
      target: {
        value: values.email,
      },
    });

    fireEvent.change(password, {
      target: {
        value: values.password,
      },
    });

    expect(email.value).toBe(values.email);
    expect(password.value).toBe(values.password);
    await act(() => {
      fireEvent.click(submit);
    });
    const token = await findByTestId("user-token");
    expect(token).toHaveTextContent("ABCD");
  }

  {
    await sleep(3000);
    const items = await findAllByTestId("item");

    const { brand } = ProductsRowElements(items[0]);
    expect(brand).toHaveAttribute("href", "/products/1");
    await act(() => {
      fireEvent.click(brand);
    });
    const product = await findByTestId("products-container");

    expect(product).toBeInTheDocument();
  }

  global.score += 2;
});

test("Single Product page works correctly 1", async () => {
  fetchMock.once(
    JSON.stringify({
      data: {
        id: 1,
        brand: "Zebronics",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfboat000113_1_cc965b26.jpg?rnd=20200526195200",
        price: 100,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
        category: "Laptop",
      },
    })
  );

  const history = createMemoryHistory();
  const { debug, getByTestId, getAllByTestId, findByTestId, findAllByTestId } =
    render(
      <MemoryRouter history={history} initialEntries={["/products/1"]}>
        <AuthContextProvider>
          <SingleProductPage />
        </AuthContextProvider>
      </MemoryRouter>
    );
  const loader = await findByTestId("loading-container");
  expect(loader).toBeDefined();
  const container = await findByTestId("products-container");
  const { brand, price, category, details, image } =
    getProductPageElements(container);
  expect(brand).toHaveTextContent("Zebronics");
  expect(price).toHaveTextContent("100");
  expect(category).toHaveTextContent("Laptop");
  expect(image).toHaveAttribute(
    "src",
    "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfboat000113_1_cc965b26.jpg?rnd=20200526195200"
  );
  expect(image).toHaveAttribute("alt", "Zebronics");
  global.score += 1;
});
test("SingleProduct page works correctly 2", async () => {
  fetchMock.once(
    JSON.stringify({
      data: {
        id: 15,
        brand: "HP",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/p/pportronics-por-1195_1_e9dc8e9f.jpg?rnd=20200526195200",
        price: 750,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
        category: "Smart_TV",
      },
    })
  );

  const history = createMemoryHistory();
  const { debug, getByTestId, getAllByTestId, findByTestId, findAllByTestId } =
    render(
      <MemoryRouter history={history} initialEntries={["/products/15"]}>
        <AuthContextProvider>
          <SingleProductPage />
        </AuthContextProvider>
      </MemoryRouter>
    );
  const loader = await findByTestId("loading-container");
  expect(loader).toBeDefined();
  const container = await findByTestId("products-container");
  const { brand, price, category, details, image } =
    getProductPageElements(container);
  expect(brand).toHaveTextContent("HP");
  expect(price).toHaveTextContent("750");
  expect(category).toHaveTextContent("Smart_TV");
  expect(image).toHaveAttribute(
    "src",
    "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/p/pportronics-por-1195_1_e9dc8e9f.jpg?rnd=20200526195200"
  );
  expect(image).toHaveAttribute("alt", "HP");
  global.score += 1;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

function ProductsRowElements(container) {
  return {
    brand: container.querySelector("[data-testid='brand']"),
    price: container.querySelector("[data-testid='price']"),
    category: container.querySelector("[data-testid='category']"),
  };
}

function getProductPageElements(container) {
  return {
    brand: container.querySelector("[data-testid='product-brand']"),
    price: container.querySelector("[data-testid='product-price']"),
    category: container.querySelector("[data-testid='product-category']"),
    details: container.querySelector("[data-testid='product-details']"),
    image: container.querySelector("[data-testid='product-image']"),
  };
}

const sleep = (delay) => new Promise((res) => setTimeout(res, delay));
let page1 = [
  {
    id: 1,
    brand: "Zebronics",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfboat000113_1_cc965b26.jpg?rnd=20200526195200",
    price: 100,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Laptop",
  },
  {
    id: 2,
    brand: "Zebronics",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfblta000011_1.jpg?rnd=20200526195200",
    price: 120,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Mobile",
  },
  {
    id: 3,
    brand: "Zebronics",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/c/bc60a_1_c82d81cb.jpg?rnd=20200526195200",
    price: 130,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Head_Phones",
  },
  {
    id: 4,
    brand: "Zebronics",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/6/1/619660798426_1_727221ba.jpg?rnd=20200526195200",
    price: 100,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Speakers",
  },
  {
    id: 5,
    brand: "Zebronics",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/_/c_8907605107849_1_655fcbdf.jpg?rnd=20200526195200",
    price: 200,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Smart_TV",
  },
  {
    id: 6,
    brand: "Apple",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/o/cor-nyfcrca000039_1_369033fe.jpg?rnd=20200526195200",
    price: 235,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Laptop",
  },
  {
    id: 7,
    brand: "Apple",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/m/ambrane_8904258106557_1_aff3c266.jpg?rnd=20200526195200",
    price: 250,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Mobile",
  },
  {
    id: 8,
    brand: "Apple",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfblta000009_1.jpg?rnd=20200526195200",
    price: 100,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Head_Phones",
  },
  {
    id: 9,
    brand: "Apple",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/z/b/zb_8906108615899_1_44867a4c.jpg?rnd=20200526195200",
    price: 325,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Speakers",
  },
  {
    id: 10,
    brand: "Apple",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/u/d/ud_bk_1_2f275806.jpg?rnd=20200526195200",
    price: 350,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Smart_TV",
  },
  {
    id: 11,
    brand: "HP",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/grey_1_398b5873.jpg?rnd=20200526195200",
    price: 375,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Laptop",
  },
  {
    id: 12,
    brand: "HP",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/o/boult-audio-ba-nk-freepods-black_1_17c2dc71.jpg?rnd=20200526195200",
    price: 100,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Mobile",
  },
  {
    id: 13,
    brand: "HP",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/i/dive_green_1.jpg?rnd=20200526195200",
    price: 500,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Head_Phones",
  },
  {
    id: 14,
    brand: "HP",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/e/pebble-8906086572115_1_34a9b9fd.jpg?rnd=20200526195200",
    price: 1000,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Speakers",
  },
  {
    id: 15,
    brand: "HP",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/p/pportronics-por-1195_1_e9dc8e9f.jpg?rnd=20200526195200",
    price: 750,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Smart_TV",
  },
  {
    id: 16,
    brand: "Dell",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/u/musebud_grey.jpg?rnd=20200526195200",
    price: 1500,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",
    category: "Laptop",
  },
];
