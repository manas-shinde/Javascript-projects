'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

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

const fetchData = (url, errMsg = 'Something went wrong!') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(` ${errMsg} : ${response.status}`);

    return response.json();
  });
};

// const getCountryData = country => {
//   fetchData(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'Country not found'
//   )
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       renderError(`Something went wrong : ${err.message}`);
//       console.log(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('manas');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = (lat, lng) => {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);

//       let msg = `You are in ${data.locality}, ${data.principalSubdivision}(${data.countryName})`;
//       console.log(msg);
//       countriesContainer.insertAdjacentText('beforeend', msg);
//     })
//     .catch(err => {
//       console.error(err.message);
//       renderError(err.message);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', e => {
//   e.preventDefault();

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         console.log(position);
//         const { latitude, longitude } = position.coords;
//         console.log(latitude, longitude);

//         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//         whereAmI(latitude, longitude);
//       },
//       function () {
//         alert(`Couldn't able to get your location`);
//       }
//     );
//   }
// });

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');

const wait = second => {
  return new Promise(resolve => setTimeout(resolve, second * 1000));
};
let currentImage;

const createImage = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      console.log(`Image not found at given path : ${imgPath}`);
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded!');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded!');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

///////////////////////////////
// Async and await

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

///////////////////////////////////////
// Returning Values from Async Functions

const whereAmI = async () => {
  const position = await getPosition();

  const { latitude, longitude } = position.coords;
  try {
    const reverseGeocoding = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    if (!reverseGeocoding.ok)
      throw new Error('Error while getting data from reverse geocoding ');

    const responseJson = await reverseGeocoding.json();

    let countryName = responseJson.countryName;

    const fetchCountryData = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    if (!fetchCountryData.ok)
      throw new Error('Error while retriving country data');

    const dataJson = await fetchCountryData.json();

    console.log(dataJson);

    return `You are in ${responseJson.locality}, ${responseJson.principalSubdivision}(${responseJson.countryName})`;
  } catch (err) {
    console.error(`We got an error  :${err}`);
    throw err;
  }
};

// console.log(`1 : will get location`);
// let msg = whereAmI();
// // Even after promise is fullfiled the msg will not be displayed. so to overcome that we can use then()
// console.warn(msg);
// console.log(`3: finished getting.`);

// console.log(`1 : will get location`);
// whereAmI().then(msg => console.warn(msg));
// console.log(`3: finished getting.`);

// console.log(`1 : will get location`);
// (async function () {
//   try {
//     const msg = await whereAmI();
//     console.warn(`2 : ${msg}`);
//   } catch (err) {
//     console.error(err.message);
//   }
//   console.log(`3: finished getting.`);
// })();

///////////////////////////////////////
// Running Promises in Parallel
const get3CountriesData = async (country1, country2, country3) => {
  try {
    const data = await Promise.all([
      fetchData(`https://restcountries.eu/rest/v2/name/${country1}`),
      fetchData(`https://restcountries.eu/rest/v2/name/${country2}`),
      fetchData(`https://restcountries.eu/rest/v2/name/${country3}`),
    ]);

    console.log(data.map(d => d[0]));
  } catch (error) {
    console.error(error);
  }
};

// get3CountriesData('india', 'china', 'usa');

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
