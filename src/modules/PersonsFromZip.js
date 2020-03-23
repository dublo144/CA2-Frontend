import { getDataFromAPIAppendToContainerWErrorHandling } from '../utils/apiOperations';
import { printCards } from '../utils/htmlOperations';

const html = `
    <div> 
    <br>
        <h1 align="center">Persons From Zipcode</h1>
        <br>
        <input id="zipInputForm" placeholder="Enter Zipcode"/>
        <button id="findPersonBtn" class="btn btn-primary">Find Persons</button>
        <br>
        <br>
<div id="resultContainer" ></div>
`;

export const cityCount = parentContainer => {
    parentContainer.innerHTML = html;
   
    document.getElementById('findPersonBtn').addEventListener('click', () => {
      const zipCode = document.getElementById('zipInputForm').value;
      const getPersonsFromZipCode = `https://sarson.codes/CA2/api/person/city/${zipCode}`;
      getDataFromAPIAppendToContainerWErrorHandling(
      getPersonsFromZipCode,
        document.getElementById('resultContainer'),
        printCards
      );
    });
  };



      