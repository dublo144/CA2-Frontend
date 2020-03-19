
const html = `
    <div>
        <h1 align="center">Person Count From Hobby</h1>
        <input id="hobbyInput" placeholder="Enter Hobby"/>
        <button id="findPersonBtn">Find Persons</button>'
        <div id="resultContainer"></div>
    </div>
`;


export const hobbyCount = parentContainer => {
    parentContainer.innerHTML = html;
   
    document.getElementById('findPersonBtn').addEventListener('click', () => {
      const hobby = document.getElementById('hobbyInput').value;
      const getPersonCountFromHobbyURL = `https://sarson.codes/CA2/api/person/hobby/count/${hobby}`;
        fetch(getPersonCountFromHobbyURL)
        .then(res=> {
            if(!res.ok){ //OK is false for statuscodes >= 400
              return Promise.reject({status: res.status, fullError: res.json() })
      
            }
            return res.json();
          })
          .then(data => {
            let result = `Amount of people with ${hobby.bold()} as a hobby: ${data}`;
            document.getElementById('resultContainer').innerHTML = result;
      
          })
          .catch(err =>{
             if(err.status){
               err.fullError.then(e=> alert(`${e.code} ${e.message}`))
             }
             else{ console.log("Network error"); }
          })
         document.getElementById("hobbyInput").value = ""
      }
    )};