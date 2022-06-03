

async function getPersonajes(){
    const res = await axios('https://rickandmortyapi.com/api/character');
    const datos = res.data.results;

    const container = document.getElementById("container");

    datos.forEach(personaje => {
        const item = document.createElement("div");
        item.innerHTML =  `
        <div class="row d-flex flex-wrap">
              <div class="card">
                <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}" id="${personaje.name}">
                <div class="card-body">
                  <h5 class="card-title">${personaje.name}</h5>
                  <p class="card-text">
                  ${personaje.gender}
                  </p>
                </div>
            </div>
        </div>
        `
        container.append(item)
    })
}
getPersonajes();