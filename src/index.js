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
const homeBtn = document.getElementById('homeBtn');

const html = `
    <div> 
    <br>
    <br>
        <h1 align="center">CA2</h1>
        <br>
        <h2 align="center">Team <font color="#d4af37">Gold</font>
        <br>
        <br>
        <br>
        <div id="resultContainer"></div>
    </div>
    `;

    const indexPage = parentContainer => {
        parentContainer.innerHTML = html;
               };


personsFromHobbyBtn.addEventListener('click', () => renderPersonsFromHobby(rootContainer));

getCountFromHobbyBtn.addEventListener('click', () => hobbyCount(rootContainer));

getPersonFromCityBtn.addEventListener('click', () => cityCount(rootContainer));

getAllZipCodesBtn.addEventListener('click', () => getAllZipCodes(rootContainer));

homeBtn.addEventListener('click', () => indexPage(rootContainer));

window.addEventListener('DOMContentLoaded',indexPage(rootContainer));