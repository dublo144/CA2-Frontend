import { getDataFromAPIAppendToContainer } from '../utils/apiOperations';
import { printCards } from '../utils/htmlOperations';

const html = `
    <div>
        <h1 align="center">Persons From Hobby</h1>
        <input id="hobbyInput" placeholder="Enter Hobby"/>
        <button id="findPersonBtn">Find Persons</button>
        <div id="resultContainer"></div>
    </div>
`;

export const renderPersonsFromHobby = parentContainer => {
  parentContainer.innerHTML = html;

  document.getElementById('findPersonBtn').addEventListener('click', () => {
    const hobby = document.getElementById('hobbyInput').value;
    const getPersonFromHobbyURL = `https://sarson.codes/CA2/api/person/hobby/${hobby}`;
    getDataFromAPIAppendToContainer(
      getPersonFromHobbyURL,
      document.getElementById('resultContainer'),
      printCards
    );
  });
};
