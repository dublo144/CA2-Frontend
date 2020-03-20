import { getDataFromAPIAppendToContainerWErrorHandling } from '../utils/apiOperations';
import { printCards } from '../utils/htmlOperations';

const html = `
    <div>
    <br>
        <h1 align="center">Persons From Hobby</h1>
        <br>
        <input id="hobbyInput" placeholder="Enter Hobby"/>
        <button id="findPersonBtn" class="btn btn-primary">Find Persons</button>
        <br>
        <br>
        <div id="resultContainer"></div>
    </div>
`;

export const renderPersonsFromHobby = parentContainer => {
  parentContainer.innerHTML = html;

  document.getElementById('findPersonBtn').addEventListener('click', () => {
    const hobby = document.getElementById('hobbyInput').value;
    const getPersonFromHobbyURL = `https://sarson.codes/CA2/api/person/hobby/${hobby}`;
    getDataFromAPIAppendToContainerWErrorHandling(
      getPersonFromHobbyURL,
      document.getElementById('resultContainer'),
      printCards
    );
  });
};
