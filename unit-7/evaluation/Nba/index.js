let PlayersData = [];
const Container = document.getElementById("playerCon");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");

const itemsPerPage = 10; // Number of players per page
let currentPage = 1;

async function fetchPlayersData() {
    try {
        const response = await fetch("https://www.balldontlie.io/api/v1/players", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch players Data");
        }

        const data = await response.json();
        PlayersData = data.data;
        renderData();
    } catch (error) {
        console.log(error);
    }
}

function renderData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const playersToRender = PlayersData.slice(startIndex, endIndex);

    Container.innerHTML = "";
    for (let el of playersToRender) {
        SingleCard(el);
    }

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(PlayersData.length / itemsPerPage);
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
        <h2>Name: ${el.first_name} ${el.last_name}</h2>
        <h4>Position: ${el.position}</h4>
        <button>Team Details</button>
    </div>
    `;
    Container.innerHTML += Card;
}

function filterPlayersByName(query) {
    const filteredPlayers = PlayersData.filter(player =>
        player.first_name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredPlayers;
}

searchInput.addEventListener("input", event => {
    const searchQuery = event.target.value;
    const filteredPlayers = filterPlayersByName(searchQuery);
    currentPage = 1; // Reset to the first page
    renderData(filteredPlayers);
});

fetchPlayersData();
