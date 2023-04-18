//function render card

export function renderCard(listaEvents, container) {
  container.innerHTML = "";
  let listado = "";
  if (listaEvents.length === 0) {
    listado = `<h1>lo sentimos no encontramos existencias</h1>`;
  } else {
    listaEvents.forEach((propiedades) => {
      if (propiedades.disponibles >= 5) {
        listado += `
  <div class="card">
    <img src="${propiedades.imagen}" alt="${propiedades.producto}">
    <div class="card-body">
      <h3>${propiedades.producto}</h3>
      <p>${propiedades.descripcion.slice(0, 150)}...</p>
      <p class="precio" >Precio: ${propiedades.precio}</p>
    </div>
    <div class="card-boton">
      <a href="./detalles.html?id=${propiedades._id}">Detalles </a>
      <a class="compra" href="./detalles.html?id=${propiedades._id}">Comprar </a>
    </div>
  </div>
  `;
      } else {
        listado += `
  <div class="card">
    <img src="${propiedades.imagen}" alt="${propiedades.producto}">
    <div class="card-body">
      <h3>${propiedades.producto}</h3>
      <p>${propiedades.descripcion.slice(0, 100)}...</p>
      <p class="precio" >Precio: ${propiedades.precio}</p>
    </div>
    <div class="card-boton2">
      <a class="ultimas" href="./detalles.html?id=${propiedades._id}"> ultimas unidades</a>
      <div>
        <a href="./detalles.html?id=${propiedades._id}">Detalles </a>
        <a class="compra" href="./detalles.html?id=${propiedades._id}">Comprar </a>
      </div>
    </div>
  </div>
    `;
      }
    });
  }
  container.innerHTML = listado;
}

export function filterCategoryFarmacia(lista) {
  return lista.filter((element) => element.categoria === "farmacia");
}

export function filterCategoryJugueteria(lista) {
  let x = lista.filter((element) => element.categoria === "jugueteria");
  return x
  
}

export function buscador(lista, input) {
  return lista.filter((element) =>
    element.producto.toLowerCase().includes(input.toLowerCase())
  );
}

export function renderDetails(propiedades, containerDetails) {
  containerDetails.innerHTML = `
  <div
    style="
    width:80% ;
    margin: 1rem ; 
    text-align: left;
    border: #202020 solid 1px;
    border-radius: 15px;    
    display: flex;
justify-content: space-between;
background-color: #063455;
color: white;
font-size: 17px;
    ">
    <img src="${propiedades.imagen}"
    style="
    object-fit: cover;
    width: 50%;
    border-radius: 15px;
    " alt="${propiedades.producto}">
    
      <div class="card-body" 
      style="
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  align-self: center;
  min-height: 70%;
    padding: 2rem 2rem;">
<h3 style=" 
text-transform: capitalize;
text-align: center;
">${propiedades.producto}</h3>
      <p>${propiedades.descripcion}</p>
      <p>Precio: ${propiedades.precio}</p>

      <div
      style="
padding: .9rem 2rem;
display: flex;
justify-content: space-between;
border-radius: 1px 1px 15px 15px;
      "
      >
      <a 
      style="
      background-color: #10AEDB;
      text-decoration: none;
border-radius: 10px;
padding: .5rem 1rem;  
color: black;
width: 50%;
text-align: center;

      "
      href="./detalles.html?id=${propiedades._id}">Comprar </a>
      </div>

      </div>
      </div>

  `;
}
