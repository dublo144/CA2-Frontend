export const printTableArray = array => {
  let table = "<table align='center'>";
  table += '<tr>';
  for (let key of Object.keys(array[0])) {
    table += `<th id=${key}> ${key} </th>`;
  }
  table += '</tr>';
  array.forEach(member => {
    table += '<tr>';
    for (let values of Object.values(member)) {
      table += `<td> ${values} </td>`;
    }
    table += '</tr>';
  });
  table += '</table>';
  return table;
};

export const printCards = array => {
  const cardsMap = array.map(person => {
    let cardBody = `<div class='card-body'>
        <h5 class='card-title'>${person.firstName} ${person.lastName}</h5>
      </div>`;
    let card = `<div class='card' style='width: 18rem;>
        ${cardBody}
      </div>`;
    return card;
  });
  return cardsMap.join('');
};
