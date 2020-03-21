export const printCards = array => {
  const cardsMap = array.map(person => {
    const firstName = nullCheck(person.firstName);
    const lastName = nullCheck(person.lastName);
    const email = nullCheck(person.email);
    const street = nullCheck(person.address.street);
    const additionalInfo = nullCheck(person.address.additionalInfo);
    const zip = nullCheck(person.address.cityInfo.zipCode);
    const city = nullCheck(person.address.cityInfo.city);

    let cardBody = `
    <div class="card-header bg-secondary">${firstName} ${lastName}</div>
    <div class='card-body bg-light'>
        <p class="card-text"><b>Email: </b>${email}</p>
        <p class="card-text"><b>Address: </b>${street} ${zip} ${city}</p>
        <p class="card-text"><b>Additional Info: </b>${additionalInfo}</p>
        ${handleHobbies(person.hobbies)}
        ${handlePhones(person.phones)}
      </div>`;

    let card = `<div class="col-3"><div class="card border-dark text-black mb-3">
        ${cardBody}
      </div></div>`;
    return card;
  });
  cardsMap.unshift('<div class="row">');
  cardsMap.push('</div>');
  return cardsMap.join('');
};


const handleHobbies = hobbies => {
  if (Array.isArray(hobbies) && hobbies.length) {
    return hobbies.map(hobby => {
      `<p><b>Name: </b>${hobby.name}</p>
      <p><b>Description: </b>${hobby.description}</p>`;
    });
  } else {
    return `<h6>No hobbies</h6>`;
  }
};

const handlePhones = phones => {
  if (Array.isArray(phones) && phones.length) {
    return phones.map(phone => {
      `<p><b>Phone: </b>${phone.number}</p>
      <p><b>Description: </b>${phone.description}</p>`;
    });
  } else {
    return `<h6>No phones</h6>`;
  }
};

const nullCheck = property => (property ? property : '');
