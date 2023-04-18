import {
  renderCard,
  filterCategoryFarmacia,
  buscador,
  filterCategoryJugueteria,
  renderDetails,
} from "./modules/funciones.js";
let card = document.getElementById("containerCard");
let card2 = document.getElementById("containerCard");
let containerInput = document.getElementById("containerInput");

let cerrar = document.getElementById("carrito");
let abrir = document.getElementById('abrirCarro')

let events;

fetch("https://mindhub-xj03.onrender.com/api/petshop")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    events = data;
    const queryString = location.pathname;
    if (queryString === "/farmacia.html") {
      let farmacia = filterCategoryFarmacia(events);
      renderCard(farmacia, card);
      containerInput.addEventListener("input", (e) => {
        let valor = e.target.value;
        let farmacia = filterCategoryFarmacia(events);
        let encontrado = buscador(farmacia, valor);
        renderCard(encontrado, card);
      });
    } else if (queryString === "/jugueteria.html") {
      let jugueteria = filterCategoryJugueteria(events);

      renderCard(jugueteria, card2);
      containerInput.addEventListener("input", (e) => {
        let valor = e.target.value;
        let jugueteria = filterCategoryJugueteria(events);
        let encontrados = buscador(jugueteria, valor);
        renderCard(encontrados, card2);
      });
    } else {
      const queryStringID = location.search;
      const param = new URLSearchParams(queryStringID).get("id");
      let everyEvent = events.find((item) => item._id == param);
      renderDetails(everyEvent, card);
    }
  })
  .catch((err) => {
    console.log(err);
  });

cerrar.children[0].addEventListener('click',()=>{
  cerrar.className = 'carrito1'
  console.log(cerrar.children[0])

})

abrir.children[1].children[4].addEventListener('click',()=>{
  abrir.children[2].className = 'carrito'
  console.log(abrir.children[2].className)
})