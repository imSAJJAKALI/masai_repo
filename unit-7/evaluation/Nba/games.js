let GamesData = [];
const Container = document.getElementById("GamesCon");
const pagination = document.getElementById("pagination");

const itemsPerPage = 10; // Number of games per page
let currentPage = 1;

async function fetchGamesData() {
    try {
        const response = await fetch("https://www.balldontlie.io/api/v1/games", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch games data");
        }

        const data = await response.json();
        GamesData = data.data;
        renderData();
    } catch (error) {
        console.log(error);
    }
}

function renderData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const gamesToRender = GamesData.slice(startIndex, endIndex);

    Container.innerHTML = "";
    for (let el of gamesToRender) {
        SingleCard(el);
    }

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(GamesData.length / itemsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.addEventListener("click", () => {
            currentPage = i;
            renderData();
        });
        pagination.appendChild(button);
    }
}

function SingleCard(el) {
    let Card = `
    <div id="singleCard">
        <img src="https://placehold.co/400" alt=""  />
        <h2>Date: ${el.date} </h2>
        <h4>Season: ${el.season}</h4>
        <h4>Status: ${el.status}</h4>
        <h4>Home Team Score: ${el.home_team_score}</h4>
        <h4>Division: ${el.division}</h4>
    </div>
    `;
    Container.innerHTML += Card;
}

fetchGamesData();
