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
