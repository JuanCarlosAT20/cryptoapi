const CriptoForm = document.getElementById("form");
const CoinSelect = document.getElementById("coin-select");
const PriceCripto = document.getElementById("cripto-convert");


CriptoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const coin = CoinSelect.value;
  const api_url = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${coin}`;
  fetch(api_url)
    .then(response => {
      return response.json();
    })
    .then(data => {

      const crypto = data[coin];

      const html = `$${crypto}`;

      PriceCripto.innerHTML = html;

    });
});
