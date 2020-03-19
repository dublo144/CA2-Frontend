import 'bootstrap/dist/css/bootstrap.css';
import { renderPersonsFromHobby } from './modules/PersonsFromHobby';
import { hobbyCount } from './modules/PersonCountFromHobby';
import { cityCount } from './modules/PersonCountFromZip';

const rootContainer = document.getElementById('root');
const personsFromHobbyBtn = document.getElementById('getPersonsFromHobbyBtn');
const createPersonBtn = document.getElementById('createPersonBtn');
const newPersonForm = document.getElementById('newPersonForm');
const getCountFromHobbyBtn = document.getElementById('getCountFromHobbyBtn');
const getPersonFromCityBtn = document.getElementById('getPersonFromCityBtn');

personsFromHobbyBtn.addEventListener('click', () =>
  renderPersonsFromHobby(rootContainer)
);

getCountFromHobbyBtn.addEventListener('click', () =>
hobbyCount(rootContainer)
);

getPersonFromCityBtn.addEventListener('click', () =>
cityCount(rootContainer)
);

createPersonBtn.addEventListener('click', () => newPersonForm.submit());
newPersonForm.addEventListener('click', function(e) {
  e.preventDefault;
  console.log('Hello');
});
