# react-usereducer-Add-Product

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Installation

- you can use any node version >= 14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - run `npm install --engine-strict` to install the node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 14

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Product reducer initialstate should match the initial state as per problem  - 1 mark
 ✅ Form reducer initialstate should match the initial state as per problem - 1 mark
 ✅ Form Reducer should update on typing name in the input box - 1 mark
 ✅ Form reducer should update on typing brand in the input box - 1 mark
 ✅ Form reducer should update on typing image in the input box  - 1 mark
 ✅ Form reducer should update on typing price in the input box - 1 mark
 ✅ Form reducer should update on selecting gender from the options - 1 marks
 ✅ Form is present with proper input fields to take input of Product-data - 1 mark
 ✅ Product Reducer state should update on adding product - 1 mark
 ✅ The added Products should be displayed on the dom - 2 mark
 ✅ Required Proptypes should be defined for all the props in SingleProduct component - 1 mark
 ✅ SingleProduct card class should be set as per gender for backgroung colour - 1 mark
```

## Folder Structure (Important Files)

```
>Src
├── >component
│    └── AddProduct.jsx
│    └── Navbar.jsx
│    └── ProductList.jsx
│    └── SingleProduct.jsx
├── >reducers
│    └── formReducer.js
│    └── productReducer.js
└── App.js
```

## Problem Statement

#### useReducer

- Create the reducer functions as `formReducer` and `productReducer`.
- Create it within the files provided and export it.

- The initial state for `form` will be as

```
  name: "",
  brand: "",
  image: "",
  price: 0,
  gender: "",
```

- - The initial state for `products` will be as

```
products: [],
```

- The following action types will be triggered on form for corresponding values

```
"NAME"
"BRAND"
"IMAGE"
"PRICE"
"GENDER"
"RESET" - (For resetting the state)
```

- The following action types will be triggered on product for adding values

```
"ADD_PRODUCT"
```

#### AddProduct.jsx

- Create a form where the user will enter all the product details
- Provide input boxes for following :-

```
Name: -
Brand: -
Image: -
Price: -
```

- Provide the input tags below `label` tag within the wrapper `div` provided

- Provide a select tag for gender with the following options and corresponding values
- This select tag will have `data-testid="gender-select"`

```
`Option`-`Value`
- Male   -  "male"
- Female   -  "female"
- Kids   -  "kids"
```

- Provide a submit button for submitting the form.
- After submitting the form both the `form` and the `formReducer` state should be reset.

<img width="1727" alt="Screenshot 2023-05-11 at 9 19 38 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-12/Screenshot%202023-05-11%20at%209.19.38%20PM_735561.png">

_Show the Product List on this page only using the `ProductList` component_

#### ProductList.jsx

- Map through the products list and show it on the same page.
- The product card will have `data-testid="product-card"` with following

```
Image :- `data-testid="product-image"`
Name :- `data-testid="product-name"`
Brand :- `data-testid="product-brand"`
Price :- `data-testid="product-price"`
```

- Refer the image provided for more clarity

<img width="1723" alt="Screenshot 2023-05-11 at 9 19 23 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-12/Screenshot%202023-05-11%20at%209.19.23%20PM_680962.png">

#### SingleProduct.jsx

- This will be a `generic component`
- It will accept all the product keys
- All the product keys passed as prop in `singleProduct` should have `prop-types` defined with proper `data-type`.
- Only `gender` prop will be a required prop.
- Based on gender you have to give background color.
- CSS property is defined in App.css, use that
- The class as per gender will be

```
male :- "blue"
female :- "pink"
kids :- "teal"
```

### Note : The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
