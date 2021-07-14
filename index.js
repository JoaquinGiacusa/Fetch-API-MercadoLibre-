function mostrarResultados(results) {
  /*DECLARO EL CONTENEDOR DE LOS RESULTADOS Y EL TEMPLATE QUE SE VA A GENERAR  */
  const contenedor = document.querySelector(".results");
  const template = document.querySelector("#result-item-template");

  /* un for para ir iterando cada result y reemplazando*/
  for (const r of results) {
    console.log(r);
    /* primero busco el titulo dentro del template y dsp lo reemplazo por el resultado que se itera */
    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    /* condition */
    const conditionEl = template.content.querySelector(
      ".result-item-condition"
    );
    conditionEl.textContent = r.condition;

    /* price */
    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = r.price;

    /* cantidad vendida */
    const soldQntEl = template.content.querySelector(
      ".result-item-sell-count-number"
    );
    soldQntEl.textContent = r.sold_quantity;

    /* imagen */
    const imgEl = template.content.querySelector(".result-item-img");
    imgEl.setAttribute("src", r.thumbnail);

    /* lo clona y lo importa*/
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }

  /* numero de resultados */
  const ResultCountEl = document.querySelector(".result-count");
  ResultCountEl.textContent = results.length;
}

function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    /* capturando palabra a buscar */
    const palabraABuscar = e.target.buscar.value;
    /*  console.log(palabraABuscar); */

    /* API ML */
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });
}

main();
