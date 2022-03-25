const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/picachuSad.jpg"); 
            pokeN("Pokémon no encontrado :( ");
            pokeid("?");
            poketipo("?");

            esta = document.getElementById("estadisticas");
            esta.textContent = "No Disponible" ;

            mov = document.getElementById("movimientos");
            mov.textContent = "No Disponible" ;
           
            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            
            let pokname = data.forms[0].name;
            pokeN(pokname);

            let pokid = data.id;
            pokeid(pokid);

            let potipo = data.types[0].type.name;
            poketipo(potipo);

            let pokeHealth = data.stats["0"].base_stat;
            let pokeAttack = data.stats["1"].base_stat;
            let pokeDeffense = data.stats["2"].base_stat;
            let pokeSpecialHealth = data.stats["3"].base_stat;
            let pokeSpecialDeffense = data.stats["4"].base_stat;
            let pokeSpeed = data.stats["5"].base_stat;

         

            changeProg(pokeHealth, "pokeHealth_bar");
            changeProg(pokeAttack, "pokeAttack_bar");
            changeProg(pokeDeffense, "pokeDeffense_bar");
            changeProg(pokeSpecialHealth, "pokeSpecialHealth_bar");
            changeProg(pokeSpecialDeffense, "pokeSpecialDeffense_bar");
            changeProg(pokeSpeed, "pokeSpeed_bar")
           
        }
        
    });
}


function pokeN(String){
    const pname = document.getElementById("nombre");
    pname.textContent = "Nombre: "+String ;
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function pokeid(String){
    const pid = document.getElementById("identificador");
    pid.textContent = "N°" + String ;
}

function poketipo(String){
    const ptipo = document.getElementById("tipo");
    ptipo.textContent = "Tipo: " + String ;
}

const changeProg = (name, element) => {
    const pokeBar = document.getElementById(element);
    pokeBar.style.width = name + "%";
}
