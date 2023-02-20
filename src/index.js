import './css/styles.css';
import debounce from 'lodash.debounce';
import searchCountry from './searchCountrys';
import { inputSearch } from './elementsMarkup';
const DEBOUNCE_DELAY = 300;
inputSearch.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));




