'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = data => {
  let currenciesName;
  for (let dt in data.currencies) {
    currenciesName = dt;
  }

  let langs = [];
  for (let lang in data.languages) {
    langs.push(data.languages[lang]);
  }

  let currenciesSymbol = data.currencies[currenciesName].symbol;

  const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${langs}</p>
            <p class="country__row"><span>💰</span>${currenciesName} - ${currenciesSymbol}</p>
        </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// function getCountryData(countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//   });
// }

// getCountryData('India');
// getCountryData('Portugal');

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('usa');
