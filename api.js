//Obtenemos los id del form, del input de select y donde se mostrara el resultado
const CriptoForm = document.getElementById("form");
const CoinSelect = document.getElementById("coin-select");
const PriceCripto = document.getElementById("cripto-convert");

//creamos un evento para el formulario y este se active cuando se ejecute el submit
CriptoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const coin = CoinSelect.value; // obtenemos el valor del select
  const api_url = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${coin}`; //consultamos a la api a traves del parametro de la moneda seleccionada
  fetch(api_url)
    .then(response => {
      return response.json(); //obtenemos la respuesta
    })
    .then(data => {

      const crypto = data[coin]; //accedemos al dato en el archivo 

      const html = `$${crypto}`; //mostramos el dato obtenido 

      PriceCripto.innerHTML = html; //usada para mostrar el resultado en el html

    });
});
