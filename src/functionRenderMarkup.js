function createListCardCountrys(countrys) {
    clearAllText();
    const countrysList = countrys.map(country => {
        return `<li class="country-list--item">
            <img src="${country.flags.svg}" alt="Country flag" width="40", height="30">
            <span class="country-list--name">${country.name.official}</span>
        </li>`
    }).join('');
    resultListCountrys.insertAdjacentHTML('beforeend', countrysList);
};

function createOneCardCountry(country) {
    clearAllText();
    const oneCountry = country[0];
    const markup = `
    <div class="country-card--header">
        <img src="${oneCountry.flags.svg}" alt="Country flag" width="55", height="35">
        <h2 class="country-card--name"> ${oneCountry.name.official}</h2>
    </div>
        <p class="country-card--field">Capital: <span class="country-value">${oneCountry.capital}</span></p>
        <p class="country-card--field">Population: <span class="country-value">${oneCountry.population}</span></p>
        <p class="country-card--field">Languages: <span class="country-value">${Object.values(oneCountry.languages).join(',')}</span></p>
    </div>`;

    resultOneCountry.innerHTML = markup;
};

export { createOneCardCountry, createListCardCountrys};

function clearAllText() {
    resultListCountrys.innerHTML = '';
    resultOneCountry.innerHTML = '';
};