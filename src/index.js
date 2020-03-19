import 'bootstrap/dist/css/bootstrap.css';
import { renderPersonsFromHobby } from './modules/PersonsFromHobby';

const rootContainer = document.getElementById('root');
const personsFromHobbyBtn = document.getElementById('getPersonsFromHobbyBtn');
const createPersonBtn = document.getElementById('createPersonBtn');
const newPersonForm = document.getElementById('newPersonForm');

personsFromHobbyBtn.addEventListener('click', () =>
  renderPersonsFromHobby(rootContainer)
);

createPersonBtn.addEventListener('click', () => newPersonForm.submit());
newPersonForm.addEventListener('click', function(e) {
  e.preventDefault;
  console.log('Hello');
});
