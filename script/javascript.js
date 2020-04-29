// this pokedex code can be referenced back on https://codepen.io/jamesqquick/pen/NWKaNQz
    const pokedex = document.getElementById('pokedex');

    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(promises).then((results) => {
            const pokemon = results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                id: result.id

            }));
            displayPokemon(pokemon);
        });
    };

    const displayPokemon = (pokemon) => {
        console.log(pokemon);
        const pokemonHTMLString = pokemon
            .map(
                (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
            )
            .join('');
        pokedex.innerHTML = pokemonHTMLString;
    };

    fetchPokemon();
    

//fucntion to return a pokemon's moves
    function returnMoves() {
        var pokemon_id = document.getElementById('text1').value;
        
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;

        console.log(url)
        fetch(url).then(result => {
            console.log(result.status)
            
            //handlig error
            // 200 = OK, anything else = error
            if (result.status !== 200) {
                alert("There was an error. Code = " + result.status)
            }
            //using JSON to parse data
            return result.json()
        }).then((result) => {
            console.log(result)
            moves = result.moves.map((m) => m.move.name)

            alert("The moves are:" + moves);
        });
    }

    function returnHeight() {
        var pokemon_id = document.getElementById('text2').value;
        
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;

        console.log(url)
        fetch(url).then(result => {
            console.log(result.status)
            
            //handling error
            // 200 = OK, anything else = error
            if (result.status !== 200) {
                alert("There was an error. Code = " + result.status)
            }

            //using JSON to parse data
            return result.json()
        }).then((result) => {
            console.log(result)
            height = result.height
            alert("The height is:" + height);
        });
    }
