import { createListCardCountrys, createOneCardCountry, clearAllText } from './functionRenderMarkup';
import Notifix from 'notiflix';
import fetchCountries from './fetchCountries';
import { inputSearch } from './elementsMarkup';
export default function searchCountry() {
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