import 'bootstrap/dist/css/bootstrap.css';
import { renderPersonsFromHobby } from './modules/PersonsFromHobby';
import { hobbyCount } from './modules/PersonCountFromHobby';
import { cityCount } from './modules/PersonsFromZip';
import { createPerson } from './modules/CreatePerson';
import { getAllZipCodes } from './modules/AllZipCodes';

const rootContainer = document.getElementById('root');
const personsFromHobbyBtn = document.getElementById('getPersonsFromHobbyBtn');
const getCountFromHobbyBtn = document.getElementById('getCountFromHobbyBtn');
const getPersonFromCityBtn = document.getElementById('getPersonFromCityBtn');
const getAllZipCodesBtn = document.getElementById('getAllZipCodesBtn');

personsFromHobbyBtn.addEventListener('click', () => renderPersonsFromHobby(rootContainer));

getCountFromHobbyBtn.addEventListener('click', () => hobbyCount(rootContainer));

getPersonFromCityBtn.addEventListener('click', () => cityCount(rootContainer));

getAllZipCodesBtn.addEventListener('click', () => getAllZipCodes(rootContainer));