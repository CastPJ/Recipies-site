const main = document.querySelector(".main");

function addRecipeCard(recipe) {
  const card = document.createElement("div");
  card.className = "card card-self";
  card.style.width = "180px";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = recipe.img;
  img.alt = "Card image";
  img.addEventListener("click", bodyEvent);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = recipe.name;

  const button = document.createElement("a");
  button.href = "#";
  button.className = "btn btn-secondary btn-self";
  button.textContent = "Dodaj";
  button.addEventListener("click", buttonEvent);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(button);
  card.appendChild(img);
  card.appendChild(cardBody);

  main.appendChild(card);
  main.className = "thumbnails";
}

function loadRecipe(meal) {
  console.log(meal.name);
}

function fetchData() {
  fetch("data/bazadan.json")
    .then((response) => response.json())
    .then((data) => {
      Object.values(data).forEach((recipe) => {
        // addRecipeCard(recipe);
      });
    })
    .catch((error) => console.error("Błąd podczas pobierania danych:", error));
}

function buttonEvent(e) {
  e.preventDefault();
  console.log("DODAWANIE");
}

function bodyEvent(e) {
  if (!e.target.classList.contains("btn")) {
    const mealID = e.target.src.substring(
      e.target.src.lastIndexOf("/") + 1,
      e.target.src.lastIndexOf(".")
    );
    fetch("data/bazadan.json")
      .then((response) => response.json())
      .then((data) => {
        const meal = data[mealID];
        if (meal) {
          main.innerHTML = "";
          loadRecipe(meal);
        } else {
          console.error("Nie znaleziono dania o podanym ID:", mealId);
        }
      })
      .catch((error) =>
        console.error("Błąd podczas pobierania danych:", error)
      );
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", fetchData);
