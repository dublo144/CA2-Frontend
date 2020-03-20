import { getDataFromAPIAppendToContainer } from '../utils/apiOperations';
import { printCards } from '../utils/htmlOperations';

const html = `
    <div>
        <h1 align="center">All Danish Zipcodes</h1>
        
        
        <div id="resultContainer" class="scrollable-container"></div>
        <br>
        <button id="getAllZipsBtn" class="btn btn-primary">Get all zipcodes!</button>
 
    </div>
`;

export const getAllZipCodes = parentContainer => {
    parentContainer.innerHTML = html;
   
    document.getElementById('getAllZipsBtn').addEventListener('click', () => {
     
      const getAllZipsUrl = `https://sarson.codes/CA2/api/person/city/all`;
        fetch(getAllZipsUrl)
        .then(res=> {
            if(!res.ok){ //OK is false for statuscodes >= 400
              return Promise.reject({status: res.status, fullError: res.json() })
      
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            makeZipCodeList(data);
      
          })
          .catch(err =>{
             if(err.status){
               err.fullError.then(e=> alert(`${e.code} ${e.message}`))
             }
             else{ console.log("Network error"); }
          })
      }
    )};

    const makeZipCodeList = data => {
        let result = `<div class="list-group">`;
        const dataArray = data.map(data =>  `<a class="list-group-item">${data}</a>`);
        result+= dataArray.join('');
        result+= "</div>"
        document.getElementById('resultContainer').innerHTML = result;
    };