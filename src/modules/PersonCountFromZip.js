const html = `
    <div>
        <h1 align="center">Get persons from Zipcode</h1>
        <input id="zipInputForm" placeholder="Enter Zipcode"/>
        <button id="findPersonBtn">Find Persons</button>'
        <div id="resultContainer">
        <br>
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Street</th>
          </tr>
        </thead>
        <tbody id="tableBody">
         
        </tbody>
      </table>

      
        </div>
    </div>
`;

export const cityCount = parentContainer => {
    parentContainer.innerHTML = html;
   
    document.getElementById('findPersonBtn').addEventListener('click', () => {
      const zipCode = document.getElementById('zipInputForm').value;
      const getPersonCountFromHobbyURL = `https://sarson.codes/CA2/api/person/city/${zipCode}`;
        fetch(getPersonCountFromHobbyURL)
        .then(res=> {
            if(!res.ok){ //OK is false for statuscodes >= 400
              return Promise.reject({status: res.status, fullError: res.json() })
      
            }
            return res.json();
          })
          .then(data => {
              console.log(data);
            populatePersonTable(data);
      
          })
          .catch(err =>{
             if(err.status){
               err.fullError.then(e=> alert(`${e.code} ${e.message}`))
             }
             else{ console.log("Network error"); }
          })
         document.getElementById("zipInput").value = ""
      }
    )};

    
const populatePersonTable = data => {
    const dataArray = data.map(data => `<tr><td>${data.id}</td><td>${data.firstName}</td><td>${data.lastName}</td><td>${data.address.street}</td></tr>`);
    document.getElementById('tableBody').innerHTML = dataArray.join('');
};

      