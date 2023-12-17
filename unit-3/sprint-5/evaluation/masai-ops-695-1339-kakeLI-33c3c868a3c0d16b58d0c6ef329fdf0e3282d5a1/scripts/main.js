// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];

let userAuthToken, userInfo, database;

//urls
const loginUrl = `${baseServerURL}/login`
const recipesUrl = `${baseServerURL}/recipes/`

//listeners
loginUserButton.addEventListener('click' , loginFn)
fetchRecipesBtn.addEventListener('click', fetchReceipeFn)
sortAtoZBtn.addEventListener('click', sortAscending);
sortZtoABtn.addEventListener('click', sortDescending);
filterLessThan50Btn.addEventListener('click', filterLessThan50);
filterMoreThanEqual50Btn.addEventListener('click', filterMoreThanEqual50);
editRecipeButton.addEventListener('click', editRecipeFn);


//functions

async function loginFn(){
  let username = loginUserUsername.value;
  let password = loginUserPassword.value

  let res = await fetch(loginUrl, {
    method:'POST',
    headers:{
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });
 
  let data = await res.json();

  userAuthToken = data.accessToken;
  userInfo = data.user
  welcomeUsernameSpan.innerText = userInfo.username
}

async function fetchReceipeFn() {
  let res = await fetch(recipesUrl, {
    method:'GET',
    headers:{
      'Content-type': 'Application/json',
      Authorization: `Bearer ${userAuthToken}`
    },
  });
 
  let data = await res.json();
  database = data;
  displayRecipes(data)
}

function displayRecipes(data) {
  mainSection.innerHTML =
  `<div class="card-list">
  ${data.map(item => getCard(item)).join("")}
  </div>
  `

  let allEdits  = document.getElementsByClassName("edit");
  for(let link of allEdits) {
    link.addEventListener('click', (e) => {
        editFn(e);
    })
  }
}
function getCard(cardData){
  return `
    <div class="card" data-id=${cardData.id}>
        <div class="card-image">
        <img src=${baseServerURL}${cardData.image} alt=${cardData.name}>
        </div>
        <div class="card-body">
            <h3 class="card-item card-title">${cardData.name}</h3>
            <div class="card-item card-description">${cardData.instructions.substring(0, 49)}</div>
            <div class="card-item card-additional-info" >Rs. ${cardData.price}</div>
            <a href="#" data-id=${cardData.id} data-price=${cardData.price} data-name = ${cardData.name} class="card-item edit card-link">EDIT</a>
        </div>
    </div>
    `
}


function sortAscending() {
     let sortedData = database.sort((a, b) => a.price - b.price )
     displayRecipes(sortedData)
}

function sortDescending() {
     let sortedData = database.sort((a, b) =>  b.price - a.price )
     displayRecipes(sortedData)
}

function filterLessThan50() {
    let filteredData = database.filter(item => item.price < 250)
    displayRecipes(filteredData)
}

function filterMoreThanEqual50() {
    let filteredData = database.filter(item => item.price >= 250)
    displayRecipes(filteredData)
}

function editFn(e){
  let id = e.target.dataset.id;
  let price = e.target.dataset.price;

  editRecipeInputId.value = id;
  editRecipeInputPrice.value = price;

}

async function editRecipeFn() {
  let id = +editRecipeInputId.value;
  let price = +editRecipeInputPrice.value;

  let res = await fetch(recipesUrl+ id, {
    method:'PATCH',
    headers:{
      'Content-type': 'Application/json',
      Authorization: `Bearer ${userAuthToken}`
    },
    body: JSON.stringify({
      price: price
    })
  });

  if(res.ok === true) {
    database.forEach(element => {
      if(+element.id === id){
        element.price = price
      }
    });
    displayRecipes(database)
  }
  
}