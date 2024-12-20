const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"

const input = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

const pokemonName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const spriteContainer = document.getElementById("sprite-container");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

async function getPokemon() {
    try {
        const searchParameter = input.value.toLowerCase();
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchParameter}`
        );
        const data = await response.json();

        pokemonName.textContent = `${data.name.toUpperCase()}`;
        id.textContent = ` #${data.id}`
        weight.textContent = `Weight: ${data.weight}`
        height.textContent = `Height: ${data.height}`
        spriteContainer.innerHTML = `
        <img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`

        // Base stats

        hp.textContent = `${data.stats[0].base_stat}`
        attack.textContent = `${data.stats[1].base_stat}`
        defense.textContent = `${data.stats[2].base_stat}`
        specialAttack.textContent = `${data.stats[3].base_stat}`
        specialDefense.textContent = `${data.stats[4].base_stat}`
        speed.textContent = `${data.stats[5].base_stat}`

        // types

        types.innerHTML = data.types
        .map(n => `<span class="${n.type.name} types">${n.type.name}</span>`).join("");


    } catch (err) {
        resetDisplay();
        alert("Pokémon not found")
    }
} 

function resetDisplay() {

    sprite.remove();

    pokemonName.textContent = "";
    id.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    types.innerHTML = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getPokemon();
})
