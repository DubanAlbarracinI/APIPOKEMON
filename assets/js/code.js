let api_url = "https://pokeapi.co/api/v2/pokemon/"
let consumo = fetch(api_url)
consumo.then(res => res.json())
    .then((pokemon) => {
        for (const pokemon1 of pokemon.results) {
            let picachu = fetch(pokemon1.url)
            picachu.then(res1 => res1.json())
                .then((picachu1) => {
                    document.querySelector("#cartas-personajes").innerHTML += `
            <div>
                <div class="col">
                    <div class="card">
                    <img src="${picachu1.sprites.other.home.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${picachu1.name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
                `
                })
        }
    })