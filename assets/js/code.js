function consumo_api_total(url_api) {
    //let url_api = "https://pokeapi.co/api/v2/pokemon"
let consumo = fetch(url_api)
consumo.then(res => res.json())
.then(data_pokemon =>{
    document.querySelector("#cartas-pokemon").innerHTML = ''
    for (const pokemon of data_pokemon.results) {
        let ingreso_data_pokemon = fetch(pokemon.url)
        ingreso_data_pokemon.then(res2 => res2.json())
            .then(pokemon_info => {
                let vida_pokemon = pokemon_info.stats[0].base_stat 
                let vida_ataque = pokemon_info.stats[1].base_stat 
                let vida_defensa = pokemon_info.stats[2].base_stat 
                let nombre_estadistica_hp = pokemon_info.stats[0].stat.name
                let nombre_estadistica_ataque = pokemon_info.stats[1].stat.name
                let nombre_estadistica_defensa = pokemon_info.stats[2].stat.name
                document.querySelector("#cartas-pokemon").innerHTML += `
                    <div class="col">
                        <div class="card border border-white som">
                                <img src="${pokemon_info.sprites.other.home.front_default}" class="card-img-top" alt="...">
                            <div class="card-body   ">
                                    <h5 class="card-title h2 text-center mb-5 ">${pokemon_info.name}</h5>
                                    <div class="row">
                                        <div class="col-3">
                                            <label class = "text-danger h6">${nombre_estadistica_hp}</label>
                                        </div>    
                                        <div class="col-9">
                                            <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style="width: ${vida_pokemon}%" aria-valuenow="${vida_pokemon}" aria-valuemin="0" aria-valuemax="100">${vida_pokemon}%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <label class = "text-primary h6">${nombre_estadistica_ataque}</label>
                                        </div>    
                                        <div class="col-9">
                                            <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" aria-label="Danger striped example" style="width: ${vida_ataque}%" aria-valuenow="${vida_ataque}" aria-valuemin="0" aria-valuemax="100">${vida_ataque}%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <label class = "text-warning h6">${nombre_estadistica_defensa}</label>
                                        </div>    
                                        <div class="col-9">
                                            <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Danger striped example" style="width: ${vida_defensa}%" aria-valuenow="${vida_defensa}" aria-valuemin="0" aria-valuemax="100">${vida_defensa}%</div>
                                            </div>
                                        </div>
                                    </div>
                `
        })
        
    }
    crear_botones_paginacion(data_pokemon.next, data_pokemon.previous)
})
}

function crear_botones_paginacion(url_pagina_siguiente, url_pagina_anterior) {
    var paginacion = document.querySelector('#paginacion')
    paginacion.innerHTML = ""
    var btn_anterior = document.createElement('button')
    btn_anterior.classList.add("btn", "btn-dark")
    btn_anterior.innerText = "Pagina anterior"
    if(url_pagina_anterior != null){
        btn_anterior.setAttribute("onclick", `consumo_pokemon_api(${url_pagina_anterior})`)
    }else{
        btn_anterior.setAttribute("disabled","")
    }
    paginacion.appendChild(btn_anterior)

    var btn_siguiente = document.createElement('button')
    btn_siguiente.classList.add("btn", "btn-primary")
    btn_siguiente.innerText = "Pagina siguiente"
    if(url_pagina_siguiente != null){
        btn_siguiente.setAttribute("onclick", `consumo_pokemon_api(${url_pagina_siguiente})`)
    }else{
        btn_siguiente.setAttribute("disabled","")
    }
    paginacion.appendChild(btn_siguiente)
}


consumo_api_total('https://pokeapi.co/api/v2/pokemon')