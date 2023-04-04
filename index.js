import {
  renderCard,
  filterCategoryFarmacia,
  buscador,
  filterCategoryJugueteria
} from "./modules/funciones.js";

let card = document.getElementById("containerCard");
let card2 = document.getElementById('containerCard')
let containerInput = document.getElementById("containerInput");

let events;

fetch("https://mindhub-xj03.onrender.com/api/petshop")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    events = data;
    // function farmacia
    console.log(data)
    let farmacia = filterCategoryFarmacia(events);
    //function render farmacia
    renderCard(farmacia, card);
  })
  .catch((err) => {
    console.log(err);
  });

containerInput.addEventListener("input", (e) => {
  let valor = e.target.value;
  let farmacia = filterCategoryFarmacia(events);
  let encontrado = buscador(farmacia, valor) ;
  renderCard(encontrado, card);
  let jugueteria = filterCategoryJugueteria(events);
  let encontrados = buscador(jugueteria, valor);
  renderCard(encontrados, card2);
});



