const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];

window.addEventListener("load", () => {
    renderCats()

})

function renderCats() {
    fetch(`${baseServerURL}/cats`, {
        method: "GET"
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            catsData = data;

            renderCards(data)
        })
}
fetchRecipesBtn.addEventListener("click", () => {
    fetch(`${baseServerURL}/recipes?_limit=25`, {
        method: "GET"
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let recipeData = data.map(element => {
                return {
                    id: element.id,
                    image: element.image,
                    title: element.name,
                    cost: element.price,

                }

            })
            renderRecipe(recipeData)
        })
})

function getCard(id, image, title, description, cost) {
    let card = `
    <div class="card" data-id="${id}">
    <div class="card-image">
    <img src="${baseServerURL}${image}">
    </div>
    <div class="card-body">
    <h3 class="card-item card-title">${title}</h3>
    <div class="card-item card-description">
    ${description}
    </div>
    <div class="card-item card-additional-info">${cost}</div>
    </div>
    </div>
    `
    return card
}
function renderCards(cardData) {
    let cardlist = `
    <div class="card-list">
    ${cardData.map(item => getCard(item.id, item.image, item.name, item.description.substr(0, 100), item.cost)).join("")}
    </div>
    
    `
    mainSection.innerHTML = cardlist;
}
function getRecipeCard(id, image, title, cost) {
    let card = `
    <div class="card" data-id="${id}">
    <div class="card-image">
    <img src="${baseServerURL}${image}">
    </div>
    <div class="card-body">
    <h3 class="card-item card-title">${title}</h3>
    <div class="card-item card-description">${cost}</div>
    </div>
    </div>
    `
    return card
}
function renderRecipe(cardData) {
    let cardlist = `
    <div class="card-list">
    ${cardData.map(item => getRecipeCard(item.id, item.image, item.title, item.cost)).join("")}
    </div>

    `
    mainSection.innerHTML = cardlist;
}


sortAtoZBtn.addEventListener("click", () => {
    let data = catsData;
    data.sort((a, b) => a.cost - b.cost);
    renderCards(data)

})
sortZtoABtn.addEventListener("click", () => {
    let data = catsData;
    data.sort((a, b) => b.cost - a.cost);
    renderCards(data)
})
filterLessThan50Btn.addEventListener("click", () => {
    let data = catsData.filter((element) => {
        if (element.cost < 50) {
            return true;
        } else {
            return false
        }
    })

    renderCards(data)
})
filterMoreThanEqual50Btn.addEventListener("click", () => {
    let data = catsData.filter((element) => {
        if (element.cost >= 50) {
            return true;
        } else {
            return false
        }
    })
    renderCards(data)

})