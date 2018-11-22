let pokemonsArray = localStorage.getItem("pokemons");
let pokemons = pokemonsArray.split(",");
pokemons.forEach(function(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let species = data.sprites.front_shiny;
        let img = document.createElement('img');
        document.querySelector('.pokeFav').appendChild(img);
        img.setAttribute('src', species);
        img.setAttribute("class", "icon");
    })
});