function addRecipeCard(recipe) {
  const main = document.querySelector(".thumbnails");

  const card = document.createElement("div");
  card.className = "card card-self";
  card.style.width = "180px";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = recipe.img;
  img.alt = "Card image";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = recipe.name;

  const button = document.createElement("a");
  button.href = "#";
  button.className = "btn btn-secondary btn-self";
  button.textContent = "Dodaj";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(button);
  card.appendChild(img);
  card.appendChild(cardBody);

  main.appendChild(card);
}

function fetchData() {
  fetch("data/bazadan.json")
    .then((response) => response.json())
    .then((data) => {
      Object.values(data).forEach((recipe) => {
        addRecipeCard(recipe);
      });
    })
    .catch((error) => console.error("Błąd podczas pobierania danych:", error));
}

document.addEventListener("DOMContentLoaded", fetchData);
