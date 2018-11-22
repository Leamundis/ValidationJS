let pok = []
const pokemons = function ShowPokemons(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let img = data.sprites.front_shiny;
        document.querySelector('#pokeImg').src = img;

        let species = data.species.url;
        fetch(`${species}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let description = data.flavor_text_entries[5].flavor_text;
            let pokeName = data.name;
            document.querySelector('#description').innerHTML = description;
            document.querySelector('#pokeName').innerHTML = pokeName;
            document.querySelector('#pokeImg').dataset.name = pokeName;
        })
        let hiddenElement = document.querySelector('.hidden');
        hiddenElement.classList.remove('hidden');
    })
}

document.querySelector("#button").addEventListener("click", function() {
    $name = document.querySelector('#input').value;
    pokemons($name);
});

document.querySelector(".bookmark").addEventListener("click", function() {
    $name = document.querySelector('#pokeImg').dataset.name;
    pok.push($name);
    let pokString = pok.toString();
    localStorage.setItem("pokemons", pokString);
});