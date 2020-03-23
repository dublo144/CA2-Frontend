const html = `
    <div>
    <br>
        <h1 align="center">All Danish Zipcodes</h1>
        
        <br>
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

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


    
    const makeZipCodeList = data => {
        let result = `<div class="list-group">`;
        const dataArray = data.map(data =>  `<a a:hover="getRandomColor()" class="list-group-item">${data.city} ${data.zipcode}</a>`);
        result+= dataArray.join('');
        result+= "</div>"
        document.getElementById('resultContainer').innerHTML = result;
    };