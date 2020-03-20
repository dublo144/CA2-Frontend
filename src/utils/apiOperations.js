export const getDataFromAPIAppendToContainer = (url, div, callback, ...args) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      div.innerHTML = callback(json, args);
    });
};

export const postToApi = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};


export const getDataFromAPIAppendToContainerWErrorHandling = (url, div, callback, ...args) => {
  fetch(url)
    .then(response => {
        if(!response.ok){ //OK is false for statuscodes >= 400
          return Promise.reject({status: response.status, fullError: response.json() })
  
        }
        return response.json();
      })
    .then(json => {
      div.innerHTML = callback(json, args);
    })
    .catch(err =>{
       if(err.status){
         err.fullError.then(e=> alert(`${e.code} ${e.message}`))
       }
       else{ console.log("Network error"); }
    })
};