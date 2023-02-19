//Розмітку html і стилі css взяв у людини яка це завдання вже робила ( вибачте що я такий лінивий :3 )
import Notifix from 'notiflix';
import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import { createListCardCountrys, createOneCardCountry } from './functionRenderMarkup';

const DEBOUNCE_DELAY = 1000;
const inputSearch = document.querySelector("#search-box");
const resultOneCountry = document.querySelector(".country-info");
const resultListCountrys = document.querySelector('.country-list');

inputSearch.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry() {
    //Метод trim() удаляет пробельные символы с начала и конца строки. Пример:  |  Ukrain = |Ukrain; | - початок інпуту
    let valueinputSearch = inputSearch.value.trim();
    if (valueinputSearch === '') {
        clearAllText();
        return;
    } else {
        fetchCountries(valueinputSearch).then((countryName) => {
            if (countryName.length < 2) {
                createOneCardCountry(countryName);
                Notifix.Notify.success('Here your result');
            } else if (countryName.length > 1 && countryName.length < 10) {
                createListCardCountrys(countryName);
                Notifix.Notify.success('Here your result');
            } else {
                Notifix.Notify.info('Too many matches found. Please enter a more specific name.');
            }
        }).catch(() => { 
            clearAllText();
            Notifix.Notify.failure('Oops, there is no country with that name')});
    }
};

//Щоб прибрати результат який був перед цим
function clearAllText() {
    resultListCountrys.innerHTML = '';
    resultOneCountry.innerHTML = '';
};

// function createOneCardCountry(country) {
//     clearAllText();
//     const oneCountry = country[0];
//     const markup = `
//     <div class="country-card--header">
//         <img src="${oneCountry.flags.svg}" alt="Country flag" width="55", height="35">
//         <h2 class="country-card--name"> ${oneCountry.name.official}</h2>
//     </div>
//         <p class="country-card--field">Capital: <span class="country-value">${oneCountry.capital}</span></p>
//         <p class="country-card--field">Population: <span class="country-value">${oneCountry.population}</span></p>
//         <p class="country-card--field">Languages: <span class="country-value">${Object.values(oneCountry.languages).join(',')}</span></p>
//     </div>`;

//     resultOneCountry.innerHTML = markup;
// }

// function createListCardCountrys(countrys) {
//     clearAllText();
//     const countrysList = countrys.map(country => {
//         return `<li class="country-list--item">
//             <img src="${country.flags.svg}" alt="Country flag" width="40", height="30">
//             <span class="country-list--name">${country.name.official}</span>
//         </li>`
//     }).join('');
//     resultListCountrys.insertAdjacentHTML('beforeend', countrysList);
// };



