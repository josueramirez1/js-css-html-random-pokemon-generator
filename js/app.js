const pokemonButton = document.querySelector("#pokemon-button");
const randomPokemonTitle = document.querySelector("#random-pokemon");
const randomPokemonDescription = document.querySelector("#description");
const pokemonImage = document.querySelector("#pokemon-image");

function getData() {
  const count = Math.floor(Math.random() * 1001);

  fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
    .then((response) => response.json())
    .then((data) => {
      randomPokemonTitle.textContent = data.name;
      pokemonImage.setAttribute("src", data.sprites.front_default);
    })
    .catch((err) => console.error(err));
}

getData();

pokemonButton.addEventListener("click", getData);
