import 'bootstrap/dist/css/bootstrap.css';
import { renderPersonsFromHobby } from './modules/PersonsFromHobby';

const rootContainer = document.getElementById('root');
const personsFromHobbyBtn = document.getElementById('getPersonsFromHobbyBtn');
const personsFromCityBtn = document.getElementById('getPersonFromsCityBtn');
const personCountFromHobbyBtn = document.getElementById('getCountFromHobbyBtn');
const allZipCodesBtn = document.getElementById('getAllZipCodesBtn');
const createPersonBtn = document.getElementById('createPersonBtn');

personsFromHobbyBtn.addEventListener('click', () =>
  renderPersonsFromHobby(rootContainer)
);

personsFromCityBtn.addEventListener('click', () => renderPersonsFromCityPage());

personCountFromHobbyBtn.addEventListener('click', () =>
  renderPersonCountFromHobbyPage()
);

allZipCodesBtn.addEventListener('click', () => renderAllZipCodesPage());

createPersonBtn.addEventListener('click', () => renderCreatePersonPage());
