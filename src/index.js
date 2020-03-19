import 'bootstrap/dist/css/bootstrap.css';
import { renderPersonsFromHobby } from './modules/PersonsFromHobby';
import { hobbyCount } from './modules/PersonCountFromHobby';
import { cityCount } from './modules/PersonCountFromZip';
import { createPerson } from './modules/CreatePerson';

const rootContainer = document.getElementById('root');
const personsFromHobbyBtn = document.getElementById('getPersonsFromHobbyBtn');
const getCountFromHobbyBtn = document.getElementById('getCountFromHobbyBtn');
const getPersonFromCityBtn = document.getElementById('getPersonFromCityBtn');

personsFromHobbyBtn.addEventListener('click', () => renderPersonsFromHobby(rootContainer));

getCountFromHobbyBtn.addEventListener('click', () => hobbyCount(rootContainer));

getPersonFromCityBtn.addEventListener('click', () => cityCount(rootContainer));
