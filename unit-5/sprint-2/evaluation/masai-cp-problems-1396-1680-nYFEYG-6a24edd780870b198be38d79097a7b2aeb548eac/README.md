## React Redux Football Match

### Maximum Marks: 24

```
✅ Able to make submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for Matches: - 1 Mark
✅ Check Initial Redux Store Structure for WatchList: - 1 Mark
✅ Get request should be made for mathches when home page loads: - 1 Mark
✅ isLoading should update accordingly while making request: - 1 Mark
✅ Matches state in store should update when matches loads on homepage: - 2 Marks
✅ All matches should be displayed on home page: - 1 Marks
✅ On sorting matches ascending data should render in UI accordingly: - 1 Mark
✅ On sorting matches ascending data should update in store accordingly: - 1 Mark
✅ On sorting matches descending data should render in UI accordingly: - 1 Mark
✅ On sorting matches descending data should update in accordingly: - 1 Mark
✅ Pagination should work and data is updated in UI as per page number: - 2 Mark
✅ Pagination should work and data is updated in store as per page number: - 2 Mark
✅ Sorting and pagination should work together:- 2 Marks
✅ On clicking watchList, the match should be added to the watchList store: - 2 Marks
✅ On Login the store authReducer state should update accordingly: - 2 Marks
✅ user is redirected to login page while visiting "/watch-list", without authentication: - 1 Mark
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

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── MatchCard.jsx
│    └── MatchList.jsx
│    └── SideBar.jsx
|    └── PrivateRoute.jsx
|    └── Navbar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── WatchListPage.jsx (Private Route:- "/watch-list")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >Authentication
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >Matches
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >WatchList
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a football match display page where user can see list of matches and add it to watch list. Use redux store.
They can sort based on year and paginate the matches on home page.

### Redux

- Create redux store, and use thunk middleware
- Create separate reducer as `authReducer`, `matchReducer` and `watchListReducer` respectively.
- **Do not rename the reducers, use as it is mentioned above**
- All the API request will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `matchReducer` should be

```
{
  isLoading: false,
  isError: false,
  matches: [],
}
```

- Initial state for `watchListReducer` should be

```
{
   watchList: [],
}
```

### MatchList

- Complete the `MatchList` component.
- Update the store with the match data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of matches in grid format inside div with `data-testid = "match-list"`.
- Use the `MatchCard` component for showing match details, with the below constraints
- Every match card will have class `match-card`
- Every match card will have a `watchList` button with class `add-to-watchlist`

```
- Show image in image tag with class `match-image`
- Show competition name with class `competition-name`
- Show match year with class `match-year`
- Show score along with team name for team1 with class `team-1`
- Show score along with team name for team2 with class `team-2`

* Do not add any extra text, only response values should be present *
```

- If user adds something to the watch list, update the `watchListReducer` store accordingly

<img width="1713" alt="Screenshot 2023-04-14 at 8 54 04 AM" src="https://user-images.githubusercontent.com/74458714/231933865-69cf74f7-d377-43d5-9184-e3c6df0ee9ed.png">

### Authentication

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successfull login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/watch-list`, redirect him to `login` page

<img width="1724" alt="Screenshot 2023-04-14 at 8 54 18 AM" src="https://user-images.githubusercontent.com/74458714/231933879-18a7d030-a351-4237-ac81-77610f0f0493.png">

### WatchListPage

- User can only visit `WatchListPage` if he is aithenticated.
- Show the matches added to the watchList here in grid format
- All the matches will be displayed within div with `data-testid = "watch-list`
- The match card will have class `match-card` with following constraints:-

```
- Show image in image tag with class `match-image`
- Show competition name with class `competition-name`
- Show match year with class `match-year`
- Show score along with team name for team1 with class `team-1`
- Show score along with team name for team2 with class `team-2`
* Image is not present in server data, use any static image" *
* Do not add any extra text, only response values should be present *
```

<img width="1728" alt="Screenshot 2023-04-14 at 8 54 49 AM" src="https://user-images.githubusercontent.com/74458714/231933904-1cf9b041-39fb-40b7-b536-20b4338866b1.png">

### Sorting

**Sidebar UI is provided you have to write the logic**

- Sort the matches on homepage by year
- While clicking the sorting radio buttons the matches should be sorted and updated in UI accordingly
- On sorting in increasing or decreasing order, the store should also be updated accordingly.

### Pagination (Bonus)

- Buttons are provided on the sidebar, complete the logic
- Show the current page number with `data-testid="page-number"`, like `Page No. 2`
- On clicking previous and next the data on the homepage should updated accordingly.
- On clicking previous and next the data in the store should also update accordingly.
- Display **10** items per page

- Sorting and pagination should work together

**Note:-**
**- While implementing sorting and pagination together, Sort the whole db.json data first then paginate**
**- By default the items on home page should be neither in ascending nor descending order**

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
