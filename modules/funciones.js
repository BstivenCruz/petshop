//function render card

export function renderCard(listaEvents, container) {
  container.innerHTML = "";
  let listado = "";

  if (listaEvents.length === 0) {
    listado = `lo sentimos no encontramos existencias`;
  } else {
    listaEvents.forEach((propiedades) => {
      if (propiedades.disponibles >= 5) {
        listado += `<div
     style="
    width:22% ;
    margin: 1rem ; 
    text-align: left;
    border: #202020 solid 1px;
    border-radius: 15px;    
    display: flex;
    flex-direction: column;
justify-content: space-between;
background-color: #063455;
color: white;
font-size: 17px;
    ">
    <img src="${propiedades.imagen}"
     style="
    object-fit: cover;
    width: 100%;
    height: 50%;
    border-radius: 15px 15px 1px 1px;
    border-bottom: black solid 2px;
    " alt="${propiedades.producto}">
      <div class="card-body" 
      style="
      padding: .6rem 2rem;">
<h3 style=" 
text-transform: capitalize;
text-align: center;
margin-bottom: 15px;
" class="card-title">${propiedades.producto}</h3>
      <p>${propiedades.descripcion.slice(0, 100)}...</p>
      <p>Precio: ${propiedades.precio}</p>
      </div>

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
border-radius: 10px;
padding: .5rem 1rem;
text-decoration: none;
   background-color: #ffffff;
color: black;

  
  "
  href="./details.html?id=${propiedades._id}">Detalles </a>
      <a 
      style="
      background-color: #10AEDB;
       
      text-decoration: none;
border-radius: 10px;
padding: .5rem 1rem;  
color: black;

      "
      href="./details.html?id=${propiedades._id}">Buy </a>
      </div>
      </div>

  `;
      } else {
        listado += `<div
        style="
       width:22% ;
       margin: 1rem ; 
       text-align: left;
       border: #202020 solid 1px;
       border-radius: 15px;    
       display: flex;
       flex-direction: column;
   justify-content: space-between;
background-color: #063455;
   color: white;
   font-size: 17px;
   
       ">
       <img src="${propiedades.imagen}"
        style="
       object-fit: cover;
       width: 100%;
       height: 50%;
       border-radius: 15px 15px 1px 1px;
       border-bottom: black solid 2px;
       " alt="${propiedades.producto}">
         <div class="card-body" 
         style="
         padding: .6rem 2rem;">
         <a 
         style="
         background-color: #eb274b;
         text-decoration: none;
   border-radius: 10px;
   padding: .5rem 1rem;  
   color: black;
   font-size: 12px;
display: flex;
align-self: flex-end;
margin-bottom: .7rem;
color: rgb(255, 255, 255);"
         href="./details.html?id=${propiedades._id}"> ultimas unidades</a>
   <h3 style=" 
   text-transform: capitalize;
   text-align: center;
   margin-bottom: 15px;
   ">${propiedades.producto}</h3>
         <p>${propiedades.descripcion.slice(0, 100)}...</p>
         <p>Precio: ${propiedades.precio}</p>
         </div>
   
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
   border-radius: 10px;
   padding: .5rem 1rem;
   text-decoration: none;
   background-color: #ffffff;
   color: black;
   
     
     "
     href="./details.html?id=${propiedades._id}">Detalles </a>
         <a 
         style="
         background-color: #10AEDB;
         text-decoration: none;
   border-radius: 10px;
   padding: .5rem 1rem;  
   color: black;
   
         "
         href="./details.html?id=${propiedades._id}">Buy </a>
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
  return lista.filter((element) => element.categoria === "jugueteria");
}

export function buscador(lista, input) {
  return lista.filter((element) =>
    element.producto.toLowerCase().includes(input.toLowerCase())
  );
}
