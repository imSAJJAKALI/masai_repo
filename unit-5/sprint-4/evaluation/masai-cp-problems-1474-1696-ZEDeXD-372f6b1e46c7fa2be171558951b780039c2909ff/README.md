## React TS Library Management

**Using TypeScript is mandatory**

## Submission Instructions [Please note]

- Before submitting make sure there is no error or warning in console.
- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 16

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ GET request is made on homepage to fetch the books data - 1 mark
 ✅ All the response from the server should be displayed on home page - 1 mark
 ✅ Correct page name should be displayed on the navbar on homepage - 1 mark.
 ✅ Correct page name should be displayed on the navbar on add-book page - 1 mark.
 ✅ Form should be present to take book details on add-book page - 1 mark.
 ✅ User should be able to add new book to the database - 2 marks.
 ✅ Patch request should be made and DOM should be updated when increase quantity button is clicked - 2 marks.
 ✅ Patch request should be made and DOM should be updated when decrease quantity button is clicked - 2 marks.
 ✅ Increase quantity button should be disabled when quantity reaches 10 - 1 mark
 ✅ Decrease quantity button should be disabled when quantity reaches 0 - 1 mark
 ✅ Delete request should be made and DOM should be updated when delete button is clicked - 2 marks.

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server

npm run server
```

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure

```
>src
├── >Components
│    └── Navbar.tsx
│    └── BookCard.tsx
│    └── BookList.tsx
├── >Pages
│    └── HomePage.tsx (Route:- "/")
│    └── AddBook.tsx (Route:- "/add-book")
│    └── MainRoutes.tsx (Add all Routes here)
|
└── api.ts (Make all api calls here)
└── App.tsx
```

## Problem Statement

You have to make a Library Management page where user can add books to database. User can remove, decrease and increase the quantity of books.

### HomePage

- HomePage will have `Navbar` and `BookList` component

<img width="1716" alt="Screenshot 2023-04-28 at 9 18 16 AM" src="https://user-images.githubusercontent.com/74458714/235051378-df5fb6cb-01ea-469b-9278-157b42bf5496.png">

### AddBook page

- This page will have `Navbar` and a form
- Provide a form here to accept data of books
- Using `form` tag is must.
- The form will have the following input fields

```
  1. input to accept name with class `book-name`
  2. input to accept image with class `book-image`
  3. input to accept author with class `book-author`
  4. input to accept no. of chapters with class `book-chapter`
  5. input to accept initial quantity with class `book-quantity`
- Provide a `button` to submit with class`submit-form`
```

- On submitting make a POST request to the server and update the data.
- The structure of the book data object will be

```
{
  name: "",
  author: "",
  image: "",
  chapter: 5,
  quantity: 2,
  id: 2
},
```

<img width="1726" alt="Screenshot 2023-04-28 at 9 18 28 AM" src="https://user-images.githubusercontent.com/74458714/235051397-d535f3eb-b782-48ec-a627-f5858c7d8fa7.png">

### Navbar

- It will accept the page name as a prop
- Correct page name should be displayed on every page.
- On Home Page :- `Home Page`
- On Add Book page :- `Add New Book`
- Show this page name in h3 tag with `data-testid=page-name`

### BookList

- Here you will show the list of books in grid format
- Show all the books within div with `data-testid="book-list"`
- Maintain a state for the books data
  `const [books, setBooks] = useState([])`
- Map through the books using `BookCard` component.
- Get request will be made when home page load and the `books` state will be updated.

### BookCard

- It will be used to display individual books.
- It will accept the `books data` and `setBooks` as prop, that will be passed from `BookList`.
- Every book card will have class `book-card`
- It will contain the following

```
  1. Image with class `book-image`
  2. Name with class `book-name`
  3. Author with class `book-author`
  4. Chapters with class `book-chapter`
  5. Increase quantity button with `data-testid="increase-quantity"`
  6. Decrease quantity button with `data-testid="decrease-quantity"`
  7. Quantity count with class `book-quantity`
  8. Delete button with `data-testid=delete-button`
```

- On clicking increase quantity and decrease quantity make patch request and update the data.
- The change should also be reflected on the DOM.

- Library can't handle more than 10 books each.
- So the increase quantity button will be disabled when quantity reaches `greater than or equal to` 10.
- Also the decrease quantity button will be disabled when quantity reaches `less than or equal to` 0.

**Note:-**

- Do not make another GET request after POST, PATCH, or DELETE REQUEST.
- To update the DOM use only the `setBooks` function, that will be accepted as a prop.
- Use the data received as response of the PATCH request to update the `books` state.
- Do not make another get request to update the DOM.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.

3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks.

4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time

<img width="1209" alt="Screenshot 2023-05-02 at 9 09 55 AM" src="https://user-images.githubusercontent.com/74458714/235574612-02e47671-43a8-4f91-8554-a2e1982622a8.png">

