import { getDataFromAPIAppendToContainer } from '../utils/apiOperations';
import { printCards } from '../utils/htmlOperations';

const html = `
    <div>
        <h1 align="center">Persons From Zipcode</h1>
        <input id="zipInputForm" placeholder="Enter Zipcode"/>
        <button id="findPersonBtn">Find Persons</button>
        <div id="resultContainer"></div>
    </div>
`;

export const cityCount = parentContainer => {
    parentContainer.innerHTML = html;
   
    document.getElementById('findPersonBtn').addEventListener('click', () => {
      const zipCode = document.getElementById('zipInputForm').value;
      const getPersonsFromZipCode = `https://sarson.codes/CA2/api/person/city/${zipCode}`;
      getDataFromAPIAppendToContainer(
      getPersonsFromZipCode,
        document.getElementById('resultContainer'),
        printCards
      );
    });
  };



    
const populatePersonTable = data => {
    const dataArray = data.map(data => `<tr><td>${data.id}</td><td>${data.firstName}</td><td>${data.lastName}</td><td>${data.address.street}</td></tr>`);
    document.getElementById('tableBody').innerHTML = dataArray.join('');
};

      